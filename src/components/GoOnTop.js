// GoToTopButton.js
import React, { useState, useEffect } from 'react';
// import './GoToTopButton.css'; // You can create a CSS file for styling

const GoToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.screenY > 300) { // Adjust this value as needed
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`go-top-button ${isVisible ? 'show' : 'hide'}`} onClick={scrollToTop}>
            <i className="fas fa-arrow-up"></i>
        </div>
    );
};

export default GoToTopButton;
