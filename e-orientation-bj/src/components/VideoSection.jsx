import { Container, Row, Col } from 'react-bootstrap';
import { IoPlayCircle } from "react-icons/io5";

const VideoSection = () => {
  return (
    <section className="video-presentation-section reveal active">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12}> 
            <div className="text-center mb-5 px-3">
              <div className="mb-2" style={{color: 'var(--navbar-color)', opacity: 0.8}}>
                <IoPlayCircle size={50} />
              </div>
              <h2 className="fw-bold" style={{color: 'var(--navbar-color)', opacity: 0.8}}>Orientation universitaire.<br/> Tout savoir sur la vie après le bac </h2>
              <p className="text-muted">Tout ce qu'il faut savoir sur l'orientation universitaire au Bénin résumé en quelques minutes.</p>
            </div>
            
            <div className="video-container-parent">
              <div className="video-wrapper">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/vDDrWAOxcF8?rel=0&showinfo=0&modestbranding=1" 
                  title="Présentation" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, border: 'none' }}
                ></iframe>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VideoSection;