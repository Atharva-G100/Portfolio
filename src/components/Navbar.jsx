import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(7, 7, 13, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
    };

    const logoStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        fontWeight: 700,
        fontSize: '1.1rem',
        color: 'var(--text-primary)',
        letterSpacing: '-0.5px',
    };

    const hexStyle = {
        width: '32px',
        height: '32px',
        border: '1.5px solid var(--accent-green)',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.7rem',
        color: 'var(--accent-green)',
        fontFamily: 'var(--font-mono)',
        transition: 'all 0.3s ease',
    };

    const linkStyle = {
        color: 'var(--text-secondary)',
        transition: 'color 0.3s ease',
        letterSpacing: '0.5px',
    };

    return (
        <nav style={navStyle}>
            <a href="#" style={logoStyle}>
                <span style={hexStyle}>AG</span>
                <span style={{ fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--accent-green)' }}>atharva</span>
                    <span style={{ color: 'var(--text-muted)' }}>.gawas</span>
                </span>
            </a>

            <ul style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
                {['Home', 'About', 'Skills', 'Work', 'Contact'].map((item) => (
                    <li key={item}>
                        <a
                            href={item === 'Home' ? '#hero' : item === 'Work' ? '#projects' : `#${item.toLowerCase()}`}
                            style={linkStyle}
                            onMouseEnter={(e) => e.target.style.color = 'var(--accent-green)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                        >
                            //{item}
                        </a>
                    </li>
                ))}
                <li>
                    <a href="#contact" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', borderColor: 'var(--accent-green)', color: 'var(--accent-green)' }}>
                        Hire Me
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
