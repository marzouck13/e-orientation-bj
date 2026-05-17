import 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as LuIcons from "react-icons/lu";

const ProcessSection = () => {
    const steps = [
        {
            id: 1,
            icon: <LuIcons.LuCalculator size={24} className="text-success" />,
            title: "Calculer sa Moyenne de Classement",
            detail: "Tout commence par le calcul précis de votre moyenne selon les 3 matières fondamentales de votre série. C'est l'indicateur principal de vos chances d'admission."
        },
        {
            id: 2,
            icon: <LuIcons.LuSearch size={24} className="text-success" />,
            title: "Identifier les Filières Compatibles",
            detail: "Le guide définit pour chaque série du BAC les filières autorisées. Nous traduisons ces règles pour vous proposer uniquement les parcours où vous pouvez postuler."
        },
        {
            id: 3,
            icon: <LuIcons.LuListChecks size={24} className="text-success" />,
            title: "Hiérarchiser ses Vœux sur la plateforme apresmonbac.bj",
            detail: "Vous devez faire 3 choix. L'ordre compte énormément car si votre 1er vœu est accepté, les suivants sont annulés. C'est ici que se joue votre stratégie."
        }
    ];

    return (
        <section className="process-section py-5 bg-light">
            {/* EN-TÊTE CENTRÉ (Occupe toute la largeur) */}
                <Row className="justify-content-center mb-5">
                    <Col lg={10} xl={8} className="text-center">
                        <span className="text-custom-green info-badge fw-bold text-uppercase mb-3">
                            Comprendre le fonctionnement
                        </span>
                        <h2 className="display-6 fw-bold text-dark mx-auto" style={{ maxWidth: '800px' }}>
                            Le parcours simplifié pour sécuriser votre avenir académique
                        </h2>
                        {/* Ligne décorative optionnelle sous le titre pour plus de style */}
                        <div className="mx-auto mt-3" style={{ width: '60px', height: '4px', background: '#2d5a27', borderRadius: '2px' }}></div>
                    </Col>
                </Row>
            <Container>
                
                {/* align-items-end pour que l'image repose sur le bas sur desktop */}
                <Row className="align-items-end g-5 flex-column-reverse flex-lg-row">
                    {/* COLONNE GAUCHE - TEXTE & ÉTAPES */}
                    <Col lg={6}>
                        <div className="process-content text-center text-lg-start px-lg-0 px-2">
                            <p className="lead text-muted fw-bold mb-5">
                                L'orientation au Bénin n'est plus un casse-tête. Elle repose sur un processus transparent en trois étapes clés.
                            </p>
                            <div className="process-steps-list">
                                {steps.map((step) => (
                                    <div key={step.id} className="process-step-card d-flex align-items-start gap-3 mb-3 p-3 shadow-sm">
                                        <div className="step-icon-circle flex-shrink-0">
                                            {step.icon}
                                        </div>
                                        <div>
                                            <h5 className="fw-bold text-dark mb-3" style={{fontSize: '1.1rem'}}>{step.title}</h5>
                                            <p className="text-muted small mb-2 lh-sm">{step.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>

                    {/* COLONNE DROITE - IMAGE */}
                    <Col lg={6} className="d-flex justify-content-center">
                        <div className="process-image-container">
                            <img 
                                src="/etudiants.png" 
                                alt="Étudiants béninois" 
                                className="img-fluid process-img-main"
                            />
                            {/* Décoration en arrière-plan */}
                            <div className="process-shape-bg"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ProcessSection;