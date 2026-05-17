/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { BsRocketTakeoff } from "react-icons/bs";

const DebouchesModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);

    const hasSeenAnnouncement = sessionStorage.getItem('hasSeenDebouchesAnnounce');
    
    if (!hasSeenAnnouncement) {
      // Déclenchement de la modale après 9,5 secondes
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 7000);
      
      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', handleResize);
      };
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClose = () => {
    setShowModal(false);
    sessionStorage.setItem('hasSeenDebouchesAnnounce', 'true');
  };

  if (!showModal) return null;

  return (
    <>
      {isMobile && (
        <div 
          className="modal-backdrop fade show" 
          style={{ zIndex: 1060 }}
          onClick={handleClose}
          role="presentation"
        ></div>
      )}

      <div 
        className="modal show d-flex align-items-end justify-content-end" 
        tabIndex="-1" 
        role="dialog"
        aria-modal="true"
        aria-labelledby="debouchesModalTitle"
        style={{ 
          zIndex: 1070, // Augmenté pour passer devant la barre de navigation ou le pied de page
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          paddingBottom: isMobile ? '0' : '30px',
          paddingRight: isMobile ? '0' : '40px',
          pointerEvents: 'none' // Laisse passer les clics sur le reste du site sur PC
        }}
      >
        <div 
          className={`modal-dialog m-0 ${isMobile ? 'modal-dialog-centered px-3 mx-auto w-100' : ''}`} 
          role="document"
          style={{ 
            pointerEvents: 'auto', // Active les clics sur la modale
            width: isMobile ? '100%' : '460px',
            maxWidth: '100%'
          }}
        >
          <div 
            className="modal-content border-0 shadow-lg text-start position-relative overflow-hidden text-white" 
            style={{ 
              borderRadius: '10px',
              backgroundImage: "url('/debouche.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: isMobile ? '420px' : '380px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.52)'
            }}
          >
            <div 
              className="position-absolute top-0 start-0 w-100 h-100" 
              style={{ 
                background: 'linear-gradient(135deg, rgba(47, 81, 69, 0.65) 0%, rgba(12, 17, 24, 0.68) 100%)',
                zIndex: 1 
              }}
              aria-hidden="true"
            ></div>

            <div className="position-relative p-4 d-flex flex-column h-100" style={{ zIndex: 2 }}>
              
              <div className="modal-header border-0 p-0 mb-3 align-items-start">
                <h5 
                  id="debouchesModalTitle"
                  className="modal-title fw-bold d-flex align-items-center gap-2" 
                  style={{ fontSize: '1.2rem' }}
                >
                  <span style={{ color: '#4ade80' }} aria-hidden="true">
                    <BsRocketTakeoff size={30} className='me-2' />Nouveauté : Explorez les Débouchés !
                  </span> 
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white ms-auto shadow-none" 
                  aria-label="Fermer la fenêtre d'information"
                  onClick={handleClose}
                ></button>
              </div>

              <div className="modal-body p-0 mb-3">
                <p className="mb-3" style={{ fontSize: '0.95rem', lineHeight: '1.5', color: '#e2e8f0' }}>
                  Chers futurs étudiants, faire le bon choix de filière ne se limite pas aux matières étudiées. Il est essentiel de connaître l'avenir de votre secteur professionnel.
                </p>
                
                <div 
                  className="p-3 rounded-3 mb-3" 
                  style={{ 
                    backgroundColor: 'rgba(57, 129, 104, 0.2)', 
                    borderColor: '#398168' 
                  }}
                >
                  <p className="fw-semibold mb-1" style={{ color: '#4ade80', fontSize: '1rem' }}>
                    Ce qui change aujourd'hui :
                  </p>
                  <span className="small" style={{ color: '#cbd5e1', lineHeight: '1.4', display: 'block', fontSize: '0.85rem' }}>
                    Chaque fiche de formation intègre désormais la liste complète des métiers d'avenir, des secteurs de recrutement au Bénin et les opportunités d'auto-emploi associés.
                  </span>
                </div>
                
                <p className="small mb-0 fw-light fw-bold" style={{ color: '#b5bbc5', fontSize: '0.9rem' }}>
                  * Consultez ces détails en cliquant sur (voir Débouchés) dans votre espace d'orientation au niveau du simulateur.
                </p>
              </div>

              <div className="modal-footer border-0 p-0 mt-auto d-flex justify-content-end gap-2">
                <button 
                  type="button" 
                  className="btn px-4 py-2 fw-bold text-white shadow-sm" 
                  style={{ 
                    borderRadius: '10px', 
                    backgroundColor: '#398168',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#2c634f'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#398168'}
                  onClick={handleClose}
                >
                  Ok c'est compris
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DebouchesModal;