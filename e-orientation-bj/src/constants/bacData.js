/**
RÉPERTOIRE OFFICIEL DES SÉRIES ET COEFFICIENTS - BÉNIN
Source : Guide d'Orientation Universitaire 2024-2025
CORRECTIONS APPLIQUÉES :
- Suppression des espaces parasites dans toutes les clés
- Coefficients Série C et D validés officiellement
- IDs de matières normalisés pour compatibilité moteur
*/
export const DONNEES_BAC = {
  // ==========================================
  // SÉRIES GÉNÉRALES
  // ==========================================
  "C": {
    nom: "Série C (Sciences Exactes)",
    matieres: [
      { id: "maths", label: "Mathématiques", coef: 6 },
      { id: "pct", label: "Physique Chimie & Techno.", coef: 5 },
      { id: "svt", label: "SVT", coef: 2 },
      { id: "philo", label: "Philosophie", coef: 2 },
      { id: "francais", label: "Français", coef: 2 },
      { id: "anglais", label: "Anglais", coef: 2 },
      { id: "hg", label: "Histoire-Géographie", coef: 2 }
    ]
  },
  "D": {
    nom: "Série D (Sciences de la Vie et de la Terre)",
    matieres: [
      { id: "svt", label: "SVT", coef: 5 },
      { id: "maths", label: "Mathématiques", coef: 4 },
      { id: "pct", label: "Physique Chimie & Techno.", coef: 4 },
      { id: "philo", label: "Philosophie", coef: 2 },
      { id: "francais", label: "Français", coef: 2 },
      { id: "anglais", label: "Anglais", coef: 2 },
      { id: "hg", label: "Histoire-Géographie", coef: 2 }
    ]
  },
  "A1": {
    nom: "Série A1 (Lettres & Langues)",
    matieres: [
      { id: "francais", label: "Français", coef: 5 },
      { id: "philo", label: "Philosophie", coef: 4 },
      { id: "hg", label: "Histoire-Géographie", coef: 3 },
      { id: "lv1", label: "Langue Vivante 1", coef: 3 },
      { id: "maths", label: "Mathématiques", coef: 2 },
      { id: "svt", label: "SVT", coef: 2 },
      { id: "lv2", label: "Langue Vivante 2", coef: 2 },
      { id: "eps", label: "EPS", coef: 1 },
      // Alias pour matières spécifiques
      { id: "allemand", label: "Allemand (LV1/LV2)", coef: 3 },
      { id: "espagnol", label: "Espagnol (LV1/LV2)", coef: 3 },
      { id: "anglais", label: "Anglais (LV1)", coef: 3 }
    ]
  },
  "A2": {
    nom: "Série A2 (Lettres & Sciences Humaines)",
    matieres: [
      { id: "hg", label: "Histoire-Géographie", coef: 5 },
      { id: "francais", label: "Français", coef: 4 },
      { id: "philo", label: "Philosophie", coef: 3 },
      { id: "lv1", label: "Langue Vivante 1", coef: 3 },
      { id: "maths", label: "Mathématiques", coef: 2 },
      { id: "svt", label: "SVT", coef: 2 },
      { id: "lv2", label: "Langue Vivante 2", coef: 2 },
      { id: "eps", label: "EPS", coef: 1 },
      { id: "allemand", label: "Allemand (LV1/LV2)", coef: 3 },
      { id: "espagnol", label: "Espagnol (LV1/LV2)", coef: 3 }
    ]
  },
  "B": {
    nom: "Série B (Sciences Sociales & Économie)",
    matieres: [
      { id: "eco", label: "Économie", coef: 5 },
      { id: "maths", label: "Mathématiques", coef: 4 },
      { id: "francais", label: "Français", coef: 3 },
      { id: "hg", label: "Histoire-Géographie", coef: 3 },
      { id: "philo", label: "Philosophie", coef: 2 },
      { id: "lv1", label: "Langue Vivante 1", coef: 2 },
      { id: "svt", label: "SVT", coef: 2 },
      { id: "eps", label: "EPS", coef: 1 },
      { id: "allemand", label: "Allemand (LV1/LV2)", coef: 2 },
      { id: "espagnol", label: "Espagnol (LV1/LV2)", coef: 2 }
    ]
  },
  // ==========================================
  // SÉRIES TECHNIQUES
  // ==========================================
  "E": {
    nom: "Série E (Mathématiques & Techniques)",
    matieres: [
      { id: "maths", label: "Mathématiques", coef: 6 },
      { id: "phys_app", label: "Physique Appliquée", coef: 5 },
      { id: "techno", label: "Technologie", coef: 5 },
      { id: "dessin", label: "Dessin Technique", coef: 4 },
      { id: "francais", label: "Français", coef: 2 },
      { id: "anglais", label: "Anglais", coef: 2 },
      { id: "eps", label: "EPS", coef: 1 },
      // Alias pour compatibilité
      { id: "pct", label: "Physique Appliquée (alias PCT)", coef: 5 },
      { id: "hg", label: "Histoire-Géographie", coef: 2 }
    ]
  },
  "F1": {
    nom: "Série F1 (Construction Mécanique)",
    matieres: [
      { id: "const_meca", label: "Construction Mécanique", coef: 6 },
      { id: "dessin", label: "Dessin Technique", coef: 5 },
      { id: "maths", label: "Mathématiques", coef: 4 },
      { id: "phys_app", label: "Physique Appliquée", coef: 4 },
      { id: "francais", label: "Français", coef: 2 },
      { id: "anglais", label: "Anglais", coef: 2 },
      { id: "eps", label: "EPS", coef: 1 },
      { id: "pct", label: "Physique Appliquée (alias PCT)", coef: 4 }
    ]
  },
  "F2": {
    nom: "Série F2 (Électronique)",
    matieres: [
      { id: "electronique", label: "Électronique", coef: 6 },
      { id: "electricite", label: "Électricité", coef: 5 },
      { id: "maths", label: "Mathématiques", coef: 4 },
      { id: "phys_app", label: "Physique Appliquée", coef: 4 },
      { id: "francais", label: "Français", coef: 2 },
      { id: "anglais", label: "Anglais", coef: 2 },
      { id: "eps", label: "EPS", coef: 1 },
      { id: "pct", label: "Physique Appliquée (alias PCT)", coef: 4 }
    ]
  },
  "F3": {
    nom: "Série F3 (Électrotechnique)",
    matieres: [
      { id: "electrotech", label: "Électrotechnique", coef: 6 },
      { id: "electri_indus", label: "Électricité Industrielle", coef: 5 },
      { id: "maths", label: "Mathématiques", coef: 4 },
      { id: "phys_app", label: "Physique Appliquée", coef: 4 },
      { id: "francais", label: "Français", coef: 2 },
      { id: "anglais", label: "Anglais", coef: 2 },
      { id: "eps", label: "EPS", coef: 1 },
      { id: "pct", label: "Physique Appliquée (alias PCT)", coef: 4 }
    ]
  },
  "F4": {
    nom: "Série F4 (Bâtiment et Travaux Publics)",
    matieres: [
      { id: "maths", label: "Mathématiques", coef: 4 },
      { id: "phys_app", label: "Physique Appliquée", coef: 4 },
      { id: "francais", label: "Français", coef: 2 },
      { id: "anglais", label: "Anglais", coef: 2 },
      { id: "eps", label: "EPS", coef: 1 },
      { id: "pct", label: "Physique Appliquée (alias PCT)", coef: 4 }
    ]
  },
  "G1": {
    nom: "Série G1 (Techniques Administratives)",
    matieres: [
      { id: "tech_admin", label: "Techniques Administratives", coef: 5 },
      { id: "compta", label: "Comptabilité", coef: 4 },
      { id: "francais", label: "Français", coef: 3 },
      { id: "anglais", label: "Anglais", coef: 3 },
      { id: "eco", label: "Économie", coef: 3 },
      { id: "maths", label: "Mathématiques", coef: 2 },
      { id: "eps", label: "EPS", coef: 1 }
    ]
  },
  "G2": {
    nom: "Série G2 (Techniques Quantitatives de Gestion)",
    matieres: [
      { id: "compta", label: "Comptabilité", coef: 6 },
      { id: "eco", label: "Économie", coef: 5 },
      { id: "maths", label: "Mathématiques", coef: 3 },
      { id: "info", label: "Informatique", coef: 2 },
      { id: "francais", label: "Français", coef: 3 },
      { id: "anglais", label: "Anglais", coef: 2 },
      { id: "eps", label: "EPS", coef: 1 }
    ]
  },
  "G3": {
    nom: "Série G3 (Techniques Commerciales)",
    matieres: [
      { id: "commerce", label: "Commerce", coef: 6 },
      { id: "eco", label: "Économie", coef: 5 },
      { id: "marketing", label: "Marketing / Gestion Com.", coef: 4 },
      { id: "francais", label: "Français", coef: 3 },
      { id: "maths", label: "Mathématiques", coef: 2 },
      { id: "anglais", label: "Anglais", coef: 2 },
      { id: "eps", label: "EPS", coef: 1 }
    ]
  },
  // ==========================================
  // ALIAS POUR SÉRIES TECHNIQUES SPÉCIALES
  // ==========================================
  "DEAT": {
    nom: "DEAT (Diplôme des Études Agricoles Tropicales)",
    seriesParente: "D",
    matieres: [
      { id: "svt", label: "SVT", coef: 5 },
      { id: "maths", label: "Mathématiques", coef: 4 },
      { id: "pct", label: "Physique Chimie & Techno.", coef: 4 },
      { id: "philo", label: "Philosophie", coef: 2 },
      { id: "francais", label: "Français", coef: 2 },
      { id: "anglais", label: "Anglais", coef: 2 },
      { id: "hg", label: "Histoire-Géographie", coef: 2 }
    ]
  },
  "DT": {
    nom: "DT (Diplôme de Technicien)",
    seriesParente: "E",
    matieres: [
      { id: "maths", label: "Mathématiques", coef: 6 },
      { id: "phys_app", label: "Physique Appliquée", coef: 5 },
      { id: "techno", label: "Technologie", coef: 5 },
      { id: "francais", label: "Français", coef: 2 },
      { id: "anglais", label: "Anglais", coef: 2 },
      { id: "eps", label: "EPS", coef: 1 },
      { id: "pct", label: "Physique Appliquée (alias PCT)", coef: 5 },
      { id: "hg", label: "Histoire-Géographie", coef: 2 }
    ]
  }
};

// ==========================================
// TABLE DE CORRESPONDANCE POUR LES ALIAS DE SÉRIES
// Clés nettoyées : pas d'espaces parasites
// ==========================================
export const ALIAS_SERIES = {
  // DEAT avec toutes ses variantes
  "DEAT": "DEAT",
  "DEAT/PV": "DEAT",
  "DEAT/PA": "DEAT",
  "DEAT/AER": "DEAT",
  "DEAT/Foresterie": "DEAT",
  "DEAT/Nutrition et Technologie Alimentaire": "DEAT",
  "DEAT/NTA": "DEAT",
  "DEAT/Pêche et aquaculture": "DEAT",
  "DEAT/Production animale": "DEAT",
  "DEAT/Aménagement et équipement rural": "DEAT",
  "DEAT/toutes options": "DEAT",
  "DEAT (toutes spécialités)": "DEAT",
  "DEAT (toutes options)": "DEAT",
  "DEAT (PRODUCTION ANIMALE)": "DEAT",
  
  // DT avec toutes ses variantes
  "DT/STI": "DT",
  "DT/COM": "DT",
  "DT/CoM": "DT",
  "DT/IMI": "DT",
  "DT/DWM": "DT",
  "DT/PM": "DT",
  "DT/EAP": "DT",
  "DT/FC": "DT",
  "DT/Electrotech": "DT",
  "DT/MA": "DT",
  "DT/FM": "DT",
  "DT/CEMS": "DT",
  "DT/BTP": "DT",
  "DT/DPB": "DT",
  "DT/OG": "DT",
  "DT/HR": "DT",
  "DT/Tourisme": "DT",
  "DT/EFS": "DT",
  "DT/Electricité": "DT",
  "DT/Electrité": "DT",
  "DT/Arts textile": "DT",
  "DT/Communication graphique": "DT",
  "DT/Musique": "DT",
  "DT/MAIO": "DT",
  "DT/Bâtiments et Travaux publics": "DT",
  "DT/FRAT": "DT",
  "DT/Froid et Climatisation": "DT",
  "DT/Froid et Clim": "DT",
  
  // Autres séries
  "EA": "E",
  "F": "E",
  "F4": "F4"
};