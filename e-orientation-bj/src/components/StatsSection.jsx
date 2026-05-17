import 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LuUniversity } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { LuCalculator } from "react-icons/lu";
import { FaGraduationCap } from "react-icons/fa6";
import { LuClipboardCheck } from "react-icons/lu";
import { GiOnTarget } from "react-icons/gi";
import { TfiLayoutAccordionList } from "react-icons/tfi";
import { GoShieldCheck } from "react-icons/go";
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2";
import { GoAlert } from "react-icons/go";
import { ImFileText2 } from "react-icons/im";
import { FiCheckCircle } from "react-icons/fi";

const StatsSection = () => {
    const stats = [
        {
            id: 1,
            icon: <LuUniversity size={24} />,
            number: "04",
            label: "Universités Nationales",
            detail: "Le Bénin dispose de quatre grandes universités publiques (UAC, UP, UNSTIM, UNA). Elles regroupent des facultés pour l'enseignement général et des écoles professionnelles pour des métiers spécifiques. Ce réseau couvre tout le pays pour rapprocher l'offre de formation des étudiants."
        },
        {
            id: 2,
            icon:<IoBookOutline size={24}/>,
            number: "146",
            label: "Filières dans le Public",
            detail: "Il existe 146 parcours de formation financés par l'État. Ces filières sont choisies pour répondre aux besoins réels de l'économie béninoise, vous offrant ainsi de meilleures chances d'insertion professionnelle après l'obtention de votre diplôme de licence."
        },
        {
            id: 3,
            icon:< LuCalculator size={24} />,
            number: "Moyenne",
            label: "Calcul du Classement",
            detail: "Votre admission dépend d'une moyenne de classement calculée selon les notes obtenues au BAC dans trois matières fondamentales. Chaque série (A, B, C, D, etc ...) possède ses propres coefficients. C'est cette moyenne qui détermine si vous êtes retenu dans une filière sollicitée."
        },
        {
            id: 4,
            icon:<FaGraduationCap size={24}/>,
            number: "Aides",
            label: "Bourses et Allocations",
            detail: "L'État soutient les meilleurs bacheliers via trois paliers : la bourse (allocation mensuelle complète), le secours universitaire (aide ponctuelle) et les Formations Partiellement Payantes (FPP) où le gouvernement prend en charge une partie importante de vos frais de scolarité."
        },
        {
            id: 5,
            icon:<LuClipboardCheck size={24} />,
            number: "Admission",
            label: "Sélection vs Concours",
            detail: "La majorité des bacheliers entrent via le classement national automatique sur dossier. Cependant, certaines écoles d'élite (Médecine, Polytechnique, ENAM) exigent un concours national écrit. Le succès à ces épreuves est la seule voie pour intégrer ces formations très prisées."
        },
        {
            id: 6,
            icon:<GiOnTarget size={24} />,
            number: "03 Choix",
            label: "Priorisation des Vœux",
            detail: "Vous avez droit à trois choix sur la plateforme. Il est crucial de bien les hiérarchiser. Une astuce de sécurité consiste à toujours choisir une filière en 'Faculté Classique' en troisième position pour garantir une place à l'université si les filières professionnelles sont saturées."
        },
        {
            id: 7,
            icon:<TfiLayoutAccordionList size={24} />,
            number: "En ligne",
            label: "Plateforme Unique",
            detail: "Tout se passe sur la plateforme nationale <<apresmonbac.bj>>. C'est l'unique portail où vous exprimez vos choix et consultez vos résultats. Aucun dossier physique n'est requis dans les universités lors de cette phase : la digitalisation garantit la transparence et l'équité pour tous."
        },
        {
            id: 8,
            icon:<GoShieldCheck size={24} />,
            number: "CAMES",
            label: "Reconnaissance de Diplôme",
            detail: "Toutes les formations listées dans le guide officiel respectent les normes du CAMES. Cela signifie que votre diplôme sera reconnu non seulement au Bénin, mais aussi dans tous les pays africains membres et à l'international, facilitant ainsi la poursuite de vos études à l'étranger."
        },
        {
            id: 9,
            icon:< HiOutlineGlobeEuropeAfrica size={24}/>,
            number: "Régional",
            label: "Écoles Inter-États",
            detail: "Le guide ouvre les portes de centres d'excellence régionaux comme l'EAMAU (Architecture au Togo) ou l'ESMT (Télécoms au Sénégal). Ces places sont limitées et soumises à des critères de performance très stricts, offrant des opportunités de carrière panafricaine."
        },
        {
            id: 10,
            icon:< GoAlert size={24} />,
            number: "Risque",
            label: "Changement de Filière",
            detail: "Soyez très vigilants : si vous êtes sélectionné pour une bourse et que vous décidez de changer de filière après, vous perdez immédiatement et définitivement votre aide financière. L'État ne finance que votre premier choix validé lors de la sélection nationale."
        },
        {
            id: 11,
            icon:<ImFileText2 size={24} />,
            number: "Privé",
            label: "Le Choix du Privé",
            detail: "Si vous optez pour un institut privé, vérifiez qu'il figure dans le guide d'orientation. Le Ministère n'autorise que les établissements ayant des filières 'homologuées' ou en 'régime d'ouverture'. Étudier dans un institut non agréé rend votre diplôme invalide devant l'État."
        },
        {
            id: 12,
            icon:<FiCheckCircle size={24}/>,
            number: "MESRS",
            label: "Source des Données",
            detail: "Toutes les informations sur E-Orientation-BJ sont tirées du Guide d'orientation de la Direction Générale de l'Enseignement Supérieur. Nous traduisons le guide officiel en outils interactifs pour vous éviter des erreurs fatales. C'est la référence ultime pour sécuriser votre avenir académique."
        }
    ];

    return (
        <section className="stats-section py-5">
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col lg={9} className="text-center px-4">
                        <span className="info-badge mb-3">
                            Votre boussole académique
                        </span>
                        <h2 className="section-title mb-4">
                            Tout comprendre sur l'orientation au Bénin
                        </h2>
                        <p className="section-subtitle mx-auto">
                            Faire le mauvais choix de filière peut coûter des années de carrière.<br/>Ainsi, 
                            <strong> E-Orientation-BJ</strong> décortique pour vous le système du Ministère (MESRS) 
                            à travers 12 points clés pour vous aider à décider avec assurance.<br/><strong>Lisez bien ce qui suit.</strong>
                        </p>
                    </Col>
                </Row>
            </Container>

           <Container>
                <Row className="g-4 justify-content-center">
                    {stats.map((stat) => (
                        <Col key={stat.id} xs={12} sm={6} lg={4} xl={3}>
                            <div className="stat-card h-100 p-4">
                                <div className="stat-header mb-3 d-flex align-items-center justify-content-between">
                                    <div className="stat-icon-box">
                                        {stat.icon}
                                    </div>
                                    <span className="stat-number">{stat.number}</span>
                                </div>
                                <h5 className="stat-label mb-3">
                                    {stat.label}
                                </h5>
                                <p className="stat-detail mb-0">
                                    {stat.detail}
                                </p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default StatsSection;