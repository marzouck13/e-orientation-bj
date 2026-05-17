 
/**
 * MOTEUR DE CALCUL DES MOYENNES DE CLASSEMENT
 * Version 2.0 - Corrigée pour compatibilité avec le catalogue
 */
import { DONNEES_BAC, ALIAS_SERIES } from './bacData';

/**
 * Résout une série complexe en sa série de base
 * Ex: "DEAT/PV" -> "DEAT", "DT/STI" -> "DT"
 */
const resoudreSerie = (serie) => {
  // Si la série existe directement dans DONNEES_BAC, la retourner
  if (DONNEES_BAC[serie]) return serie;
  
  // Vérifier dans la table des alias
  if (ALIAS_SERIES[serie]) return ALIAS_SERIES[serie];
  
  // Tentative de correspondance partielle
  for (const [alias, base] of Object.entries(ALIAS_SERIES)) {
    if (serie.startsWith(alias.split('/')[0])) {
      return base;
    }
  }
  
  // Log warning et retourner null si non trouvé
  console.warn(`Série non reconnue: "${serie}". Vérifiez bacData.js`);
  return null;
};

/**
 * Vérifie si une série est autorisée pour une filière
 * Gère les alias de séries (DEAT/*, DT/*)
 */
const estSerieAutorisee = (serieBachelier, seriesAutorisees) => {
  const serieBase = resoudreSerie(serieBachelier);
  if (!serieBase) return false;
  
  return seriesAutorisees.some(serieAutorisee => {
    // Vérification directe
    if (serieAutorisee === serieBachelier) return true;
    if (serieAutorisee === serieBase) return true;
    
    // Vérification avec résolution de l'alias
    const serieAutoriseeBase = resoudreSerie(serieAutorisee);
    if (serieAutoriseeBase === serieBase) return true;
    
    // Cas spécial : DEAT accepte tous les DEAT/*
    if (serieBase === 'DEAT' && serieAutorisee.startsWith('DEAT')) return true;
    if (serieBase === 'DT' && serieAutorisee.startsWith('DT')) return true;
    
    // Cas spécial : série autorisée générique comme "DEAT/(toutes options)"
    if (serieAutorisee.startsWith('DEAT/') && serieBase === 'DEAT') return true;
    if (serieAutorisee.startsWith('DT/') && serieBase === 'DT') return true;
    
    return false;
  });
};

/**
 * Obtient le coefficient d'une matière pour une série donnée
 * @param {string} idMatiere - L'ID de la matière
 * @param {string} serie - La série du bac
 * @returns {number} Coefficient ou 0 si non trouvé
 */
const getCoefficient = (idMatiere, serie) => {
  const serieBase = resoudreSerie(serie);
  if (!serieBase || !DONNEES_BAC[serieBase]) {
    console.warn(`Série "${serie}" non trouvée`);
    return 0;
  }
  
  const matiere = DONNEES_BAC[serieBase].matieres.find(m => m.id === idMatiere);
  
  if (!matiere) {
    console.warn(`Matière "${idMatiere}" non trouvée pour la série "${serieBase}"`);
    return 0;
  }
  
  return matiere.coef;
};

/**
 * Calcule la MC (Moyenne de Classement) pour une filière spécifique
 * Formule : (M1*Co1 + M2*Co2 + M3*Co3) / (Co1 + Co2 + Co3)
 * 
 * @param {Object} notesUtilisateur - Objet contenant les notes { maths: 15, pct: 12, ... }
 * @param {Array<string>} matieresClefs - Tableau d'IDs des 3 matières [ "maths", "pct", "svt" ]
 * @param {string} serie - La série du baccalauréat
 * @returns {number} La moyenne calculée (arrondie à 3 décimales)
 */
export const calculerMoyenneClassement = (notesUtilisateur, matieresClefs, serie) => {
    if (!Array.isArray(matieresClefs) || matieresClefs.length === 0) {
        console.error('matieresClefs doit être un tableau non vide');
        return 0;
    }

    let numerateur = 0;
    let denominateur = 0;

    matieresClefs.forEach(idMatiere => {
        const note = notesUtilisateur[idMatiere] || 0;
        const coefficient = getCoefficient(idMatiere, serie);
        
        // Protection contre les coefficients nuls ou undefined
        if (coefficient > 0) {
            numerateur += note * coefficient;
            denominateur += coefficient;
        }
    });

    // Protection contre la division par zéro
    if (denominateur === 0) {
        console.warn('Aucun coefficient valide trouvé. Vérifiez les IDs de matières et la série.');
        return 0;
    }
    
    return Math.round((numerateur / denominateur) * 1000) / 1000;
};

/**
 * Filtre et trie les filières selon le profil de l'utilisateur
 * 
 * @param {Object} notes - Notes de l'utilisateur { maths: 15, pct: 12, ... }
 * @param {string} serieChoisie - La série du BAC (ex: "C", "D", "DEAT/PV")
 * @param {Array} catalogueFilieres - Le catalogue des filières
 * @returns {Array} Filtrées, enrichies et triées par moyenne décroissante
 */
export const genererClassementComplet = (notes, serieChoisie, catalogueFilieres) => {
    if (!serieChoisie || !catalogueFilieres) {
        console.error('serieChoisie et catalogueFilieres sont requis');
        return [];
    }

    const serieBase = resoudreSerie(serieChoisie);
    if (!serieBase) {
        console.error(`Série "${serieChoisie}" non reconnue`);
        return [];
    }

    return catalogueFilieres
        .filter(filiere => {
            if (!filiere.series_autorisees || !Array.isArray(filiere.series_autorisees)) {
                console.warn(`Filière "${filiere.id}" n'a pas de series_autorisees valide`);
                return false;
            }
            return estSerieAutorisee(serieChoisie, filiere.series_autorisees);
        })
        .map(filiere => {
            const matieresClefs = filiere.matieres_clefs || [];
            const moyenne = calculerMoyenneClassement(notes, matieresClefs, serieChoisie);
            
            return {
                ...filiere,
                moyenneCalculee: moyenne,
                serieBaseUtilisee: serieBase,
                matieresUtilisees: matieresClefs
            };
        })
        .sort((a, b) => b.moyenneCalculee - a.moyenneCalculee);
};

/**
 * Utilitaire : Retourne les informations de debug pour une filière
 */
export const debuggerFiliere = (filiere, serie) => {
    const serieBase = resoudreSerie(serie);
    const details = (filiere.matieres_clefs || []).map(id => ({
        id,
        coefficient: getCoefficient(id, serie),
        existe: !!DONNEES_BAC[serieBase]?.matieres.find(m => m.id === id)
    }));
    
    return {
        filiere: filiere.nom,
        serie,
        serieBase,
        estAutorisee: estSerieAutorisee(serie, filiere.series_autorisees),
        detailsMatieres: details
    };
};