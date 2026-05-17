import 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';

const Hero = () => {
    // La bonne façon de récupérer l'année en JS
    const Annee_en_cour = new Date().getFullYear();

    return (
        <section className="hero-section position-relative d-flex align-items-center">
            <Container>
                {/* On aligne les colonnes au sommet (align-items-start) pour le Desktop */}
                <Row className="align-items-start flex-column-reverse flex-lg-row">
                    
                    {/* IMAGE & CERCLE DÉCORATIF */}
                    <Col lg={6} className="d-flex justify-content-center align-items-center position-relative mt-5 mt-lg-0">
                        <div className="hero-image-wrapper">
                            <img 
                                src="/Fille.png" 
                                alt="Étudiante" 
                                className="img-fluid hero-img"
                            />
                            <div className="hero-circle-bg"></div>
                        </div>
                    </Col>

                    {/* TEXTE ALIGNÉ AU SOMMET SUR DESKTOP */}
                    <Col lg={6} className="hero-content-col pt-lg-4">
                        <div className="hero-glass-card text-center text-lg-start">
                            <Badge bg="success" className=" px-5 py-2 rounded-pill bg-opacity-10 text-success fw-bold">
                                SESSION {Annee_en_cour} EN COURS
                            </Badge>
                            <h1 className="display-6 pt-4 fw-bold text-dark mb-4">
                                Faites le bon choix et tracez votre chemin vers votre <span className="text-green">succès professionnel</span>.
                            </h1>
                            <p className="lead text-muted mb-4">
                                <strong><strong>E-Orientation-BJ</strong> est conçue pour accompagner les bacheliers béninois dans le choix crucial de leur cursus universitaire, facteur determinant pour leurs avenir.</strong>
                            </p>
                            
                            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                                <Link to="/simulateur">
                                    <Button className="btn-espace py-2 px-4 shadow-sm">
                                        Accéder au simulateur
                                    </Button>
                                </Link>
                                <Button variant="outline-dark" className="py-2 px-4 fw-bold border-1 rounded-3">
                                    Télécharger le guide
                                </Button>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default Hero;