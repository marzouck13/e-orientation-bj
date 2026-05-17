import 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LuAward, LuHeartHandshake, LuCoins } from "react-icons/lu";

const ScholarshipSection = () => {
    const scholarships = [
        {
            id: 1,
            title: "Bourses d'Excellence",
            subtitle: "Soutien Intégral",
            icon: <LuAward size={30} />,
            color: "#284824",
            description: "Destinées aux meilleurs bacheliers par filière. Couvre les frais de formation et inclut une allocation mensuelle (bourse).",
            points: ["Frais de scolarité offerts", "Allocation mensuelle", "Priorité en cité universitaire"]
        },
        {
            id: 2,
            title: "Secours Universitaires",
            subtitle: "Aide Sociale",
            icon: <LuHeartHandshake size={30} />,
            color: "#198754",
            description: "Une aide financière accordée aux étudiants non-boursiers ayant une bonne moyenne de classement, pour soutenir leurs frais de vie durant l'année.",
            points: ["Allocation forfaitaire annuelle", "Critères de mérite et sociaux", "Renouvelable sous conditions"]
        },
        {
            id: 3,
            title: "À Titre Partiellement Payant (FPP)",
            subtitle: "Formation Partiellement Payante",
            icon: <LuCoins size={30} />,
            color: "#3f6e97",
            description: "Pour les étudiants qui choisissent des filières spécifiques sans avoir obtenu de bourse. L'État subventionne une partie, mais des frais restent à charge.",
            points: ["Accès aux filières d'élite", "Frais fixes annuels", "Diplôme identique aux boursiers"]
        }
    ];

    return (
        <section className="scholarship-section py-5">
             <div className="text-center mb-5">
                    <h6 className="text-custom-green info-badge fw-bold text-uppercase">Financement des études</h6>
                    <h2 className="display-6 fw-bold text-dark">Comprendre les types d'allocations</h2>
                    <p className="text-muted mx-auto" style={{maxWidth: '700px'}}>
                        Le classement national détermine votre éligibilité à l'un de ces trois statuts selon les quotas définis par le Guide Officiel.
                    </p>
                </div>
            <Container>
               

                <Row className="g-4">
                    {scholarships.map((item) => (
                        <Col key={item.id} lg={4}>
                            <Card className="h-100 shadow-sm scholarship-card">
                                <Card.Body className="p-4">
                                    <div className="scholarship-icon-circle mb-4" style={{ backgroundColor: `${item.color}12`, color: item.color }}>
                                        {item.icon}
                                    </div>
                                    <h4 className="fw-bold text-dark mb-1">{item.title}</h4>
                                    <p className="text-success fw-bold small text-uppercase mb-3">{item.subtitle}</p>
                                    <p className="text-muted mb-4 small">
                                        {item.description}
                                    </p>
                                    <ul className="list-unstyled">
                                        {item.points.map((point, index) => (
                                            <li key={index} className="d-flex align-items-center mb-2 small text-dark">
                                                <span className="me-2 text-success">✓</span> {point}
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default ScholarshipSection;