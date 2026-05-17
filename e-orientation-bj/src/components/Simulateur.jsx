import 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { IoCalculator } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";
import { FaArrowRightToBracket } from "react-icons/fa6";

const SimulateurPreview = () => {
    const Annee_en_cour = new Date().getFullYear();
    return (
        <section id='simulateur'className="simulateur-preview-section py-5">
            <Container>
                <div className="sim-glass-box p-4 p-lg-5">
                    <Row className="align-items-center">
                        {/* Côté Gauche : Texte et Arguments */}
                        <Col lg={7} className="mb-4 mb-lg-0">
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <div className="icon-badge-sm">
                                     <IoCalculator size={35} />
                                </div>
                                <span className="text-success fw-bold text-uppercase tracking-wider small">
                                    Outil de précision
                                </span>
                            </div>
                            
                            <h2 className="display-6 fw-bold text-dark mb-4">
                                Calculez vos chances d'admission en <span className="text-green">un clic</span>
                            </h2>
                            
                            <p className="lead text-muted mb-4">
                                Ne devinez plus. Notre simulateur utilise les coefficients officiels du guide d'orientation {Annee_en_cour} pour projeter vos résultats.
                            </p>

                            <ul className="list-unstyled mb-5">
                                <li className="d-flex align-items-center mb-3">
                                   <FiCheckCircle className="text-success me-3" size={29} />
                                    <span className="text-dark fw-medium">Calcul automatique de la moyenne de classement</span>
                                </li>
                                <li className="d-flex align-items-center mb-3">
                                    <FiCheckCircle className="text-success me-3" size={29} />
                                    <span className="text-dark fw-medium">Vérification de compatibilité par série (A1, B, C, D, etc.)</span>
                                </li>
                                <li className="d-flex align-items-center">
                                    <FiCheckCircle className="text-success me-3" size={29} />
                                    <span className="text-dark fw-medium">Liste personnalisée des filières autorisées</span>
                                </li>
                            </ul>

                            <Link to="/simulateur">
                                <Button variant="success" className="btn-espace-lg animate-vibrate d-inline-flex align-items-center gap-2 shadow-lg">
                                 <small><small>Accéder au simulateur (cliquez ici)</small></small><FaArrowRightToBracket size={20} />
                                </Button>
                            </Link>
                            
                        </Col>

                        {/* Côté Droit : Visuel "UI" du Simulateur */}
                        <Col lg={5}>
                            <Card className="border-1 preview-card-mockup">
                                <Card.Body className="p-5 fw-bold">
                                    <div className="mockup-header mb-4">
                                        <div className="mockup-dot1"></div>
                                        <div className="mockup-dot2"></div>
                                        <div className="mockup-dot3"></div>
                                    </div>
                                    <div className="fake-input mb-3">Utilisez le simulateur pour vos analyse profond</div>
                                    <div className="fake-input mb-3">
                                        <div className="fake-line w-50"></div>
                                        <div className="fake-line w-75"></div>

                                    </div>
                                    <div className="fake-result p-2 text-center">
                                        <div className="h2 fw-bold zouck text-success mb-0">ELIGIBLE</div>
                                    </div>
                                    <div className="mt-4">
                                        <div className="fake-line w-75"></div>
                                        <div className="fake-line w-100"></div>
                                        <div className="fake-line w-50"></div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default SimulateurPreview;