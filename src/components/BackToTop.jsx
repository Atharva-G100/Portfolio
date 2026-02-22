import React, { useState, useEffect } from 'react';

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                zIndex: 90,
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                background: 'rgba(7, 7, 13, 0.8)',
                border: '1px solid rgba(0, 255, 65, 0.25)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                color: '#00ff41',
                fontSize: '1.2rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                pointerEvents: visible ? 'auto' : 'none',
                boxShadow: '0 4px 20px rgba(0, 255, 65, 0.1)',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 255, 65, 0.6)';
                e.currentTarget.style.boxShadow = '0 4px 25px rgba(0, 255, 65, 0.2)';
                e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 255, 65, 0.25)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 255, 65, 0.1)';
                e.currentTarget.style.transform = visible ? 'translateY(0)' : 'translateY(20px)';
            }}
        >
            ↑
        </button>
    );
};

export default BackToTop;
