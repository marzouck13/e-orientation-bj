/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Badge, Table, ProgressBar, Alert, Modal, Button } from 'react-bootstrap';
import { IoCalculator, IoSearch, IoSchool, IoStatsChart, IoAlertCircleOutline, IoInformationCircleOutline } from "react-icons/io5";
import { DONNEES_BAC } from '../constants/bacData';
import { CATALOGUE_FILIERES } from '../constants/dataFilieres';
import { genererClassementComplet } from '../constants/calculateurMoteur';

const SimulateurPage = () => {
  const Annee_en_cour = new Date().getFullYear();
  const [serie, setSerie] = useState('');
  const [notes, setNotes] = useState({});
  const [resultats, setResultats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFiliere, setSelectedFiliere] = useState(null);

  const getProgression = () => {
    if (!serie || !DONNEES_BAC[serie]) return 0;
    const totalMatieres = DONNEES_BAC[serie].matieres.length;
    const matieresRemplies = Object.values(notes).filter(n => n !== undefined && n !== '').length;
    return Math.round((matieresRemplies / totalMatieres) * 100);
  };

  const getStatutEligibility = (mc) => {
    const score = parseFloat(mc);
    if (score >= 15) return { label: "Boursier (peut-être)", class: "status-boursier", info: "MC entre 15 et 20" };
    if (score >= 13) return { label: "Demi-Boursier (peut-être)", class: "status-demi", info: "MC entre 13 et 15" };
    if (score >= 11.5) return { label: "Partiellement Payant (peut-être)", class: "status-partiel", info: "MC entre 11.5 et 13" };
    if (score >= 10) return { label: "Entièrement Payant", class: "status-payant", info: "MC entre 10 et 11.5" };
    return { label: "Faibles chances (sûrement)", class: "status-faible", info: "MC inférieur à 10" };
  };

  const handleSerieChange = (e) => {
    setSerie(e.target.value);
    setNotes({});
    setResultats([]);
  };

  const handleNoteChange = (matiereId, valeur) => {
    let numVal = valeur === '' ? '' : parseFloat(valeur);
    if (numVal > 20) numVal = 20;
    setNotes(prev => ({ ...prev, [matiereId]: numVal }));
  };

  useEffect(() => {
    if (serie && Object.keys(notes).length > 0) {
      const calculs = genererClassementComplet(notes, serie, CATALOGUE_FILIERES);
      setResultats(calculs);
    }
  }, [notes, serie]);

  const filteredResultats = resultats.filter(f =>
    f.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.etablissement.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="simulateur-dashboard bg-light min-vh-100 pb-5">
      {/* Top Bar Statistique - Responsive */}
      <div className="stats-top-bar bg-white border-bottom py-3 mb-4 shadow-sm">
        <Container>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <div className="d-flex gap-3 flex-wrap justify-content-center">
              <Badge bg="light" className="text-dark border">
                <IoSchool className="text-success me-1" /> {CATALOGUE_FILIERES.length} Filières
              </Badge>
              <Badge bg="light" className="text-dark border">
                <IoStatsChart className="text-success me-1" /> AlgorithmeZK-1.2Officiel{Annee_en_cour}
              </Badge>
            </div>
            {serie && (
              <div className="d-flex align-items-center gap-3 progress-container">
                <small className="fw-bold text-secondary text-nowrap">Complétion : </small>
                <ProgressBar
                  now={getProgression()}
                  variant="success"
                  className="flex-grow-1"
                  style={{ height: '10px', minWidth: '150px' }}
                  animated
                />
                <small className="fw-bold text-success">{getProgression()}%</small>
              </div>
            )}
          </div>
        </Container>
      </div>

      <Container>
        <Row className="g-4">
          {/* CONFIGURATION - Mobile: Haut, PC: Gauche */}
          <Col lg={4} xl={3}>
            <Card className="border-0 shadow-sm overflow-hidden sticky-lg-top" style={{ top: '20px', zIndex: 10 }}>
              <div className="card-header-custom p-3 text-white d-flex align-items-center gap-2">
                <IoCalculator /> <span>Configuration du Profil</span>
              </div>
              <Card.Body className="p-3">
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold small text-uppercase text-muted">Votre Série du BAC</Form.Label>
                  <Form.Select className="form-control-modern" value={serie} onChange={handleSerieChange}>
                    <option value=""><small>Sélectionner votre série...</small></option>
                    {Object.keys(DONNEES_BAC).map(s => (
                      <option key={s} value={s}>{DONNEES_BAC[s].nom}</option>
                    ))}
                  </Form.Select>
                </Form.Group>

                {serie ? (
                  <div className="animate-fade-in">
                    <Form.Label className="fw-bold small text-uppercase text-muted mb-3">Saisie des Notes (/20)</Form.Label>
                    <div className="notes-container custom-scrollbar" style={{ maxHeight: '400px', overflowY: 'auto', paddingRight: '5px' }}>
                      {DONNEES_BAC[serie].matieres.map(matiere => (
                        <div key={matiere.id} className="note-input-card mb-2">
                          <div className="d-flex justify-content-between mb-1">
                            <span className="small fw-semibold">{matiere.label}</span>
                            <span className="badge bg-light text-muted">Coef {matiere.coef}</span>
                          </div>
                          <Form.Control
                            type="number"
                            step="0.01"
                            placeholder="0.00"
                            className="input-pixel-perfect"
                            value={notes[matiere.id] || ''}
                            onChange={(e) => handleNoteChange(matiere.id, e.target.value)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-5 border rounded-3 border-dashed bg-light">
                    <IoAlertCircleOutline size={40} className="text-muted mb-2 opacity-50" />
                    <p className="small text-muted mb-0 px-3">Choisissez votre série pour débloquer la saisie des notes.</p>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>

          {/* EXPLORATEUR DE FILIÈRES */}
          <Col lg={8} xl={9}>
            <div className="d-flex flex-column gap-4">
              {/* Barre de Recherche */}
              <Card className="border-0 shadow-sm rounded-3 p-2 p-md-3">
                <Row className="align-items-center g-3">
                  <Col md={7}>
                    <div className="search-wrapper">
                      <IoSearch className="search-icon" size={30} />
                      <Form.Control
                        type="text"
                        placeholder="Rechercher une filière, un métier, une ville..."
                        className="search-input-modern"
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </Col>
                  <Col md={5} className="d-flex justify-content-md-end justify-content-center gap-2">
                    <Badge bg="white" className="text-dark border p-2 px-3 rounded-pill fw-medium">
                      {filteredResultats.length} filières trouvées
                    </Badge>
                  </Col>
                </Row>
              </Card>

              {/* Zone de résultats */}
              {!serie ? (
                <Card className="border-0 shadow-sm rounded-3 py-5 text-center bg-white">
                  <div className="py-5 px-3">
                    <div className="empty-state-icon mb-4">
                      <IoSchool size={60} className="text-success opacity-25" />
                    </div>
                    <h3 className="fw-bold">Prêt pour la simulation ?</h3>
                    <p className="text-muted mx-auto mb-0" style={{ maxWidth: '450px' }}>
                      Entrez vos notes pour découvrir instantanément vos chances d'admission et votre éligibilité aux bourses de l'État.
                    </p>
                  </div>
                </Card>
              ) : (
                <>
                  {/* Table Desktop */}
                  <div className="d-none d-md-block card border-0 shadow-sm rounded-3 overflow-hidden">
                    <Table hover responsive className="mb-0 align-middle dashboard-table text-nowrap small">
                      <thead>
                        <tr className="bg-light">
                          <th className="ps-3">Filière & Établissement</th>
                          <th className="text-center">MC Calculé</th>
                          <th className="text-center">Statut Éligibilité</th>
                          <th className="text-center pe-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredResultats.map(f => {
                          const status = getStatutEligibility(f.moyenneCalculee);
                          return (
                            <tr key={f.id}>
                              <td className="py-3 ps-3 filiere-col" style={{ whiteSpace: 'normal', width: '50%' }}>
                                <div className="fw-bold text-dark mb-1" style={{ fontSize: '0.92rem', lineHeight: '1.2' }}>
                                  {f.nom}
                                </div>
                                <div className="text-muted small mb-1">{f.etablissement}</div>
                                <div className="text-success fw-bold x-small"><small>Université :</small> {f.universite}</div>
                              </td>
                              <td className="text-center">
                                <div className="score-badge-sm mx-auto">{f.moyenneCalculee}</div>
                              </td>
                              <td className="text-center">
                                <span className={`status-pill-sm ${status.class}`}>{status.label}</span>
                                <div className="mt-1" style={{ fontSize: '0.7rem', opacity: 0.8 }}>{status.info}</div>
                              </td>
                              <td className="text-center pe-3">
                                <Button
                                  variant="outline-success"
                                  className="py-1 px-3 fw-bold"
                                  style={{ fontSize: '0.75rem', borderRadius: '6px' }}
                                  onClick={() => setSelectedFiliere(f)}
                                >
                                  Voir débouchés
                                </Button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>

                  {/* Mobile Cards Grid */}
                  <div className="d-md-none">
                    {filteredResultats.map(f => {
                      const status = getStatutEligibility(f.moyenneCalculee);
                      return (
                        <Card key={f.id} className="border-0 shadow-sm rounded-3 mb-3 overflow-hidden result-card-mobile">
                          <Card.Body className="p-3">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <div style={{ maxWidth: '75%' }}>
                                <h6 className="fw-bold mb-1">{f.nom}</h6>
                                <div className="x-small text-success fw-bold text-uppercase"><small>université :</small> {f.universite}</div>
                              </div>
                              <div className="score-badge-sm"><small><small>MC={f.moyenneCalculee}</small></small></div>
                            </div>
                            <div className="small text-muted mb-3">{f.etablissement}</div>
                            <div className="d-flex justify-content-between align-items-center p-2 rounded-3 bg-light">
                              <span className="x-small fw-bold text-muted">Status probable : </span>
                              <span className={`status-pill-sm ${status.class}`}>{status.label}</span>
                            </div>
                            <div className="mt-3 d-grid d-md-block text-md-end">
                              <Button
                                variant="outline-success"
                                size="sm"
                                className="fw-bold"
                                onClick={() => setSelectedFiliere(f)}
                              >
                                Voir débouchés
                              </Button>
                            </div>
                          </Card.Body>
                        </Card>
                      );
                    })}
                  </div>

                  {/* Avertissement Numerus Clausus */}
                  <Alert variant="info" className="mt-4 border-0 shadow-sm rounded-3 d-flex gap-3 align-items-center">
                    <IoInformationCircleOutline size={40} className="text-info flex-shrink-0" />
                    <div className="small">
                      <strong>Note importante : </strong> Ces résultats sont basés sur les coefficients officiels.
                      Toutefois, l'admission finale dépend du nombre de places disponibles (quota) et du rang des autres postulants.
                      Même avec une MC élevée, l'admission n'est pas garantie à 100% si la concurrence est forte.
                    </div>
                  </Alert>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>

      {/* MODALE DES DÉBOUCHÉS */}
      <Modal 
        show={!!selectedFiliere} 
        onHide={() => setSelectedFiliere(null)} 
        centered 
        size="lg"
        scrollable={true} 
      >
        <Modal.Header closeButton className="border-bottom pb-2 sticky-top bg-white">
          <Modal.Title className="text-success fw-bold" style={{ fontSize: '1.25rem' }}>
            {selectedFiliere?.nom}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="custom-scrollbar" style={{ maxHeight: '65vh', backgroundColor: '#f8fafc' }}>
          <div className="d-flex align-items-center mb-3 px-1">
            <IoSchool className="text-success fs-4 me-2" />
            <h6 className="mb-0 fw-bold text-dark">Débouchés professionnels détaillés :</h6>
          </div>

          <div className="d-flex flex-column gap-3">
            {selectedFiliere?.debouches?.map((debouche, idx) => {
              const isObjectFormat = typeof debouche === 'object' && debouche !== null;

              return (
                <div 
                  key={idx} 
                  className="p-3 bg-white rounded-3 shadow-sm border-start animate-fade-in"
                  style={{ wordBreak: 'break-word' }}
                >
                  {isObjectFormat ? (
                    <>
                      <h6 className="fw-bold text-success mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.3' }}>
                        {idx + 1}. {debouche.titre}
                      </h6>
                      <div className="ps-3 ms-1 border-start border-light">
                        <div className="mb-2 text-wrap flex-column">
                          <span className="small fw-bold text-dark d-block d-sm-inline">Rôle principal : </span>
                          <div 
                            style={{ whiteSpace: 'normal', lineHeight: '1.4' }}
                          >
                            <span className="small text-muted">{debouche.role}</span>
                          </div>  
                        </div>
                        
                        <div className="mb-2 text-wrap flex-column">
                          <span className="small fw-bold text-dark d-block d-sm-inline">Missions sur le terrain : </span>
                          <div 
                            style={{ whiteSpace: 'normal', lineHeight: '1.4' }}
                          >
                            <span className="small text-muted">{debouche.actions}</span> 
                          </div>
                          
                        </div>
                        
                        <div className="mt-2 pt-2 border-top border-light d-flex flex-column align-items-start gap-1 text-wrap">
                          <span className="small fw-bold text-dark text-nowrap mb-2">Où travailler au Bénin :</span>
                          <div 
                            className="small px-2 py-1 bg-light rounded border border-success border-opacity-10 w-100"
                            style={{ whiteSpace: 'normal', lineHeight: '1.4' }}
                          >
                             {debouche.structures}....
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    // Rendu de secours décalé également si c'est du texte brut
                    <div className="ps-3 ms-1 d-flex align-items-start text-wrap">
                      <span className="text-success fw-bold me-2">✓</span>
                      <span className="text-dark small fw-semibold" style={{ whiteSpace: 'normal' }}>{debouche}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div 
            className="mt-4 text-muted fst-italic px-1 small px-2 py-1 rounded border border-warning  w-100"
            style={{ whiteSpace: 'normal', lineHeight: '1.4',fontSize: '0.75rem'}}>
            * Ces débouchés et opportunités d'insertion professionnelle sont fournis à titre indicatif pour le contexte béninois et évoluent selon le marché de l'emploi et vos spécialisations futures (Licence Professionnelle, Master).
          </div>
        </Modal.Body>

        <Modal.Footer className="border-top pt-2 bg-white">
          <Button variant="secondary" className="px-4 font-weight-bold btn-sm" onClick={() => setSelectedFiliere(null)}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SimulateurPage;