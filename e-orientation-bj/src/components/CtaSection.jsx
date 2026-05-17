import 'react';
import { Container, Badge } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa6";

const CtaSection = () => {
    return (
        <section className="cta-bachelier-section">
            {/* L'overlay permet de s'assurer que le texte reste lisible peu importe l'image de fond */}
            <div className="cta-overlay"></div>
            
            <Container className="position-relative z-index-2 text-center py-5">
                <div className="cta-content-wrapper mx-auto" style={{ maxWidth: '800px' }}>
                    <Badge bg="success" className="bg-opacity-20 text-white px-3 py-2 rounded-pill mb-4 border border-success border-opacity-25">
                       FÉLICITATIONS AUX NOUVEAUX BACHELIERS 
                    </Badge>
                    
                    <h2 className="display-5 fw-bold text-white mb-4">
                        Votre avenir commence par un <span className="text-success-light">choix éclairé</span>
                    </h2>
                    
                    <p className="lead text-white-50 mb-5">
                        Bravo pour votre réussite ! C'est le moment de faire un choix qui impactera directement toute votre vie. 
                        Prenez le temps d'analyser chaque option sur la plateforme et dans le guide avant de faire un choix, car votre cursus universitaire 
                        est le socle de votre future carrière professionnelle. Ne vous précipitez pas, et si vous êtes pertubé dans vos analyses et calcules, vous pouvez utiliser notre simulateur pour avoir une idée claire  .
                    </p>
                    
                    <div className="d-flex justify-content-center">
                        <a 
                            href="https://apresmonbac.bj" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn-cta-final"
                        >
                            Faire mes choix sur apresmonbac.bj
                            <FaArrowRight className="ms-2" />
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CtaSection;