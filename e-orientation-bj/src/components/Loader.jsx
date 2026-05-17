import { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
        }, 2800); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`loader-wrapper ${fadeOut ? 'fade-out' : ''}`}>
            <div className="loader-content">
                <div className="logo-container">
                    {/* Ajout de style inline pour garantir la visibilité immédiate */}
                    <img 
                        src="/Logo1.png" 
                        alt="E-Orientation Logo" 
                        className="loader-logo" 
                    />
                </div>
                <div className="loader-bar-container">
                    <div className="loader-progress-bar"></div>
                </div>
                <div className="loader-info">
                    <span className="platform-name">E-Orientation-BJ</span>
                    <span className="loading-status">Chargement de plateforme...</span>
                </div>
            </div>
        </div>
    );
};

export default Loader;