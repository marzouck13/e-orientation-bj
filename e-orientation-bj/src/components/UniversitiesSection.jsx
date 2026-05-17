import 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { LuMapPin, LuBookOpen, LuMicroscope, LuSettings, LuSprout } from "react-icons/lu";

const UniversitiesSection = () => {
    const unis = [
        {
            id: "uac",
            name: "UAC",
            fullName: "Université d'Abomey-Calavi",
            location: "Abomey-Calavi",
            website: "https://www.uac.bj/",
            icon: <LuMicroscope size={24} />,
            logo: "/UAC.png", 
            description: "Première institution universitaire du Bénin. Elle concentre l'élite de la recherche scientifique et propose la plus vaste offre de formation, des facultés classiques aux écoles professionnelles d'excellence.",
            details: "Regroupe plus de 60 entités de formation. Elle abrite les centres de recherche les plus équipés du pays et gère les flux d'étudiants les plus importants.",
            specialities: [
                "Santé (FSS)", 
                "Sciences Agronomiques (FSA)", 
                "Ingénierie (EPAC)", 
                "Informatique (IFRI)", 
                "Droit & Science Politique (FADESP)",
                "Économie & Gestion (FASEG)"
            ],
            stats: {
                schools: "Plus de 25 écoles professionnelles",
                focus: "Recherche & Expertise"
            }
        },
        {
            id: "up",
            name: "UP",
            fullName: "Université de Parakou",
            location: "Parakou",
            website: "https://www.univ-parakou.bj/",
            icon: <LuBookOpen size={24} />,
            logo: "/UP.png",
            description: "Le pôle d'excellence du Nord-Bénin. L'UP se distingue par son ouverture sur les problématiques de développement régional et sa forte capacité d'insertion professionnelle.",
            details: "Deuxième université du pays par sa taille. Elle est particulièrement réputée pour sa faculté de médecine et ses programmes innovants en agronomie tropicale.",
            specialities: [
                "Médecine (Faculté de Médecine)", 
                "Agronomie (FA)", 
                "Informatique (IUT)",
                "Économie & Gestion (FASEG)", 
                "Droit & Science Politique (FDSP)",
                "Aménagement du Territoire (FLASH)"
            ],
            stats: {
                schools: "08 entités de formation",
                focus: "Développement Régional"
            }
        },
        {
            id: "unstim",
            name: "UNSTIM",
            fullName: "Université Nationale des Sciences, Technologies, Ingénierie et Mathématiques",
            location: "Abomey / Lokossa / Natitingou / Dassa",
            website: "https://unstim.bj",
            icon: <LuSettings size={24} />,
            logo: "/UNSTIM.png",
            description: "L'université thématique dédiée aux métiers de l'ingénieur. Elle forme les cadres techniques indispensables aux grands chantiers de développement industriel et numérique du pays.",
            details: "L'UNSTIM est éclatée sur plusieurs centres d'excellence : l'ENSET (Lokossa) pour les métiers techniques et l'ENS (Natitingou) pour les sciences exactes.",
            specialities: [
                "Génie Civil & Électricité (ENSET)", 
                "Informatique & Réseaux (INSTI)", 
                "Topographie & BTP", 
                "Génie Mécanique & Productique",
                "Enseignement des Sciences"
            ],
            stats: {
                schools: "Centres d'excellence technologique",
                focus: "Innovation & Industrie"
            }
        },
        {
            id: "una",
            name: "UNA",
            fullName: "Université Nationale d'Agriculture",
            location: "Porto-Novo / Kétou / Sakété / Idigny",
            website: "https://una.bj",
            icon: <LuSprout size={24} />,
            logo: "/UNA.png",
            description: "Institution de pointe dédiée à la transformation du secteur agricole. Elle forme des entrepreneurs agricoles capables de relever les défis de la sécurité alimentaire et de l'exportation.",
            details: "L'UNA est structurée en écoles spécialisées (Aquaculture, Foresterie, Production Végétale) réparties dans les zones à fort potentiel agricole du Sud et du Centre.",
            specialities: [
                "Gestion des Forêts (ENGF)", 
                "Horticulture & Aménagement (ENSTA)", 
                "Aquaculture (ENSTA)", 
                "Machinisme Agricole",
                "Économie & Sociologie Rurale"
            ],
            stats: {
                schools: "09 écoles thématiques",
                focus: "Souveraineté Alimentaire"
            }
        }
    ];

    return (
        <section className="universities-section py-5 bg-white">
            <Container>
                <Row className="justify-content-center mb-1">
                    <Col lg={9} className="text-center px-4">
                        <div className="text-center mb-2">
                            <h6 className="text-success info-badge fw-bold text-uppercase">Où étudier ?</h6>
                            <h2 className="display-6 fw-bold text-dark">Les 4 Pôles d'Excellence du Bénin</h2>
                            <br/>
                            <p class='fw-bold'>Cliquez sur l'entité pour voir les détailles</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Tab.Container id="uni-tabs" defaultActiveKey="uac">
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            <Nav variant="pills" className="uni-nav-pills justify-content-center mb-5 gap-2">
                                {unis.map((uni) => (
                                    <Nav.Item key={uni.id}>
                                        <Nav.Link eventKey={uni.id} className="uni-link px-4 py-2">
                                            {uni.name}
                                        </Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>
                            

                            <Tab.Content className="uni-tab-content p-4 p-lg-5 shadow-sm rounded-4 border position-relative overflow-hidden">
                                {unis.map((uni) => (
                                    <Tab.Pane eventKey={uni.id} key={uni.id} className="animate__animated animate__fadeIn">
                                        
                                        {/* LOGO EN FILIGRANE (BACKGROUND) */}
                                        <img 
                                            src={uni.logo} 
                                            alt="" 
                                            className="uni-bg-logo position-absolute" 
                                            style={{ 
                                                right: '-20px', 
                                                bottom: '-20px', 
                                                opacity: 0.25, 
                                                height: '340px', 
                                                zIndex: 1,
                                                pointerEvents: 'none'
                                            }} 
                                        />

                                        {/* CONTENU AU PREMIER PLAN */}
                                        <Row className="align-items-center position-relative" style={{ zIndex: 2 }}>
                                            <Col lg={8}>
                                                <div className="d-flex align-items-center gap-3 mb-4">
                                                    <div className="uni-icon-box p-3 bg-light rounded-3 text-success">
                                                        {uni.icon}
                                                    </div>
                                                    <div>
                                                        <h3 className="fw-bold text-dark mb-0">{uni.fullName}</h3>
                                                        <span className="text-muted small">
                                                            <LuMapPin className="me-1 text-success"/> {uni.location}
                                                        </span>
                                                    </div>
                                                </div>
                                                
                                                <div className="mb-4">
                                                    <p className="lead fs-6 text-dark fw-semibold mb-2">
                                                        {uni.description}
                                                    </p>
                                                    <p className="text-muted small mb-0">
                                                        {uni.details}
                                                    </p>
                                                </div>

                                                <div className="d-flex flex-wrap gap-2 mb-4">
                                                    {uni.specialities.map((spec, i) => (
                                                        <span key={i} className="badge bg-light text-dark border px-3 py-2 rounded-pill">
                                                            {spec}
                                                        </span>
                                                    ))}
                                                </div>

                                                <Row className="g-3">
                                                    <Col sm={6}>
                                                        <div className="p-3 border rounded-3 bg-light bg-opacity-50">
                                                            <small className="text-muted d-block">Infrastructure</small>
                                                            <span className="fw-bold text-dark">{uni.stats.schools}</span>
                                                        </div>
                                                    </Col>
                                                    <Col sm={6}>
                                                        <div className="p-3 border rounded-3 bg-light bg-opacity-50">
                                                            <small className="text-muted d-block">Axe Majeur</small>
                                                            <span className="fw-bold text-success">{uni.stats.focus}</span>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                
                                                {/* Bouton de redirection vers le site web */}
                                                <div className="mt-4">
                                                    <a 
                                                        href={uni.website} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="btn btn-outline-success d-inline-flex align-items-center gap-2 px-4 py-2 fw-bold rounded-3 transition-all"
                                                        style={{ fontSize: '0.9rem', borderWidth: '2px' }}
                                                    >
                                                        <LuBookOpen size={18} />
                                                        Visiter leur site web pour en apprendre plus (Cliquez ici)
                                                    </a>
                                                </div>

                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                ))}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </section>
    );
};

export default UniversitiesSection;