import 'react';
import { Container, Accordion, Badge } from 'react-bootstrap';


const FaqSection = () => {
    const faqs = [
        {
            id: "0",
            question: "Quand commence la phase d'orientation sur apresmonbac.bj ?",
            answer: "Les dates officielles sont fixées chaque année par le MESRS. Généralement, la plateforme ouvre ses portes quelques semaines après la proclamation des résultats du BAC. Restez connectés à nos alertes pour ne pas manquer l'ouverture."
        },
        {
            id: "1",
            question: "Quelles sont les pièces à fournir pour mon dossier ?",
            answer: "Pour la simulation, aucune pièce n'est requise. En revanche, pour l'inscription définitive après sélection, vous aurez besoin de votre relevé de notes au BAC, de votre acte de naissance sécurisé (ANIP) et d'un certificat de nationalité."
        },
        {
            id: "2",
            question: "Comment est calculée la moyenne de classement ?",
            answer: "Elle est calculée sur la base de vos notes dans les trois matières fondamentales de votre série. Chaque filière possède ses propres matières de base et ses coefficients spécifiques définis dans le guide d'orientation."
        },
        {
            id: "3",
            question: "Puis-je modifier mes vœux après validation ?",
            answer: "Une fois la période de choix clôturée sur la plateforme nationale, aucune modification n'est possible. C'est pourquoi il est crucial de bien réfléchir avant de valider vos 3 choix définitifs."
        },
        {
            id: "4",
            question: "Quelle est la différence entre Bourse et Secours universitaire ?",
            answer: "La bourse est accordée selon le mérite (très haute moyenne), tandis que le secours universitaire est une aide sociale destinée aux étudiants ayant une bonne moyenne mais ne remplissant pas les critères de bourse."
        }
    ];

    return (
        <section className="faq-section py-5 bg-white" id="faq">
            <div className="text-center mb-5">
                    <Badge bg="success" className="bg-opacity-10 text-success px-3 py-2 rounded-pill mb-3">
                       Questions Fréquentes
                    </Badge>
                    <h2 className="fw-bold text-dark">Tout savoir sur l'orientation</h2>
                    <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
                        Retrouvez les réponses aux questions les plus posées par les nouveaux bacheliers et leurs parents.
                    </p>
                </div>
            <Container>
                <div className="faq-wrapper mx-auto" style={{ maxWidth: '850px' }}>
                    <Accordion defaultActiveKey="0" flush={false} className="custom-accordion">
                        {faqs.map((faq) => (
                            <Accordion.Item eventKey={faq.id} key={faq.id} className="mb-3 border-0 shadow-sm">
                                <Accordion.Header className="fw-bold">
                                    {faq.question}
                                </Accordion.Header>
                                <Accordion.Body className="text-muted lh-base">
                                    {faq.answer}
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>
            </Container>
        </section>
    );
};

export default FaqSection;