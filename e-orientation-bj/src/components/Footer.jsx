import 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <Container className="py-5">
                <Row className="gy-5">
                    {/* Branding & Mission */}
                    <Col lg={4} md={12}>
                        <img src="/logoS.png" alt="E-Orientation-bj Logo" className="mb-4" style={{ height: '70px' }} />
                        <p className="footer-text mb-4">
                            E-Orientation-bj est le portail d'accompagnement intelligent pour les futurs étudiants. 
                            Notre mission est de simplifier l'accès à l'information universitaire au Bénin pour une orientation réussie.
                        </p>
                        <div className="social-links d-flex gap-3 mt-4">
                            <a href="#" className="social-icon-modern" aria-label="Facebook"><FaFacebookF size={14} /></a>
                            <a href="#" className="social-icon-modern" aria-label="LinkedIn"><FaLinkedinIn size={14} /></a>
                            <a href="mailto:contact.mesrs@gouv.bj" className="social-icon-modern" aria-label="Email"><FaEnvelope size={14} /></a>
                        </div>
                    </Col>

                    {/* Liens Rapides */}
                    <Col lg={2} md={4} sm={6}>
                        <h5 className="footer-title">Plateforme</h5>
                        <ul className="list-unstyled footer-links">
                            <li><a href="#simulateur">Simulateur</a></li>
                            <li><a href="#universites">Universités</a></li>
                            <li><a href="#bourses">Bourses d'études</a></li>
                            <li><a href="#guide">Guide 2026</a></li>
                        </ul>
                    </Col>

                    {/* Liens Utiles */}
                    <Col lg={2} md={4} sm={6}>
                        <h5 className="footer-title">Liens Utiles</h5>
                        <ul className="list-unstyled footer-links">
                            <li><a href="https://apresmonbac.bj" target="_blank" rel="noreferrer">Après Mon BAC</a></li>
                            <li><a href="https://eresultats.bj" target="_blank" rel="noreferrer">E-Résultats</a></li>
                            <li><a href="https://enseignementsuperieur.gouv.bj" target="_blank" rel="noreferrer">Ministère (MESRS)</a></li>
                        </ul>
                    </Col>

                    {/* Contact Direct */}
                    <Col lg={4} md={4}>
                        <h5 className="footer-title">Contact Officiel</h5>
                        <ul className="list-unstyled footer-contact">
                            <li className="d-flex gap-3 mb-3 align-items-start">
                                <IoLocationSharp className="mt-1 flex-shrink-0" style={{color: 'var(--accent-green)'}} />
                                <span>....</span>
                            </li>
                            <li className="d-flex gap-3 mb-3 align-items-center">
                                <FaPhoneAlt className="flex-shrink-0" style={{color: 'var(--accent-green)'}} />
                                <span>....</span>
                            </li>
                            <li className="d-flex gap-3 align-items-center">
                                <FaEnvelope className="flex-shrink-0" style={{color: 'var(--accent-green)'}} />
                                <span>....</span>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            {/* Copyright bar */}
            <div className="footer-bottom py-3">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="text-center text-md-start">
                            <p className="small mb-0 opacity-75 text-white">
                                &copy; {currentYear} <strong>E-Orientation-bj</strong>. Tous droits réservés.
                            </p>
                        </Col>
                        <Col md={6} className="text-center text-md-end mt-2 mt-md-0">
                            <p className="small mb-0 fw-bold" style={{color: 'var(--accent-green)'}}>
                                dev: Marzouck AFFO
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;