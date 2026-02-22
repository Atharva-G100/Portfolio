import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) setMobileOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const navLinks = [
        { label: 'Home', href: '#hero' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Work', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ];

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
        <header>
            <nav style={navStyle} role="navigation" aria-label="Main navigation">
                <a href="#hero" style={logoStyle} aria-label="Atharva Gawas — Home">
                    <span style={hexStyle}>AG</span>
                    <span style={{ fontSize: '0.9rem' }}>
                        <span style={{ color: 'var(--accent-green)' }}>atharva</span>
                        <span style={{ color: 'var(--text-muted)' }}>.gawas</span>
                    </span>
                </a>

                {/* Desktop nav links */}
                <ul style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-nav">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                style={linkStyle}
                                onMouseEnter={(e) => e.target.style.color = 'var(--accent-green)'}
                                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                            >
                                //{item.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#contact" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', borderColor: 'var(--accent-green)', color: 'var(--accent-green)' }}>
                            Hire Me
                        </a>
                    </li>
                </ul>

                {/* Mobile hamburger button */}
                <button
                    className="mobile-hamburger"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={mobileOpen}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0.5rem',
                        zIndex: 110,
                    }}
                >
                    <div style={{
                        width: '24px',
                        height: '2px',
                        background: 'var(--accent-green)',
                        transition: 'all 0.3s ease',
                        transform: mobileOpen ? 'rotate(45deg) translateY(8px)' : 'none',
                    }} />
                    <div style={{
                        width: '24px',
                        height: '2px',
                        background: 'var(--accent-green)',
                        margin: '6px 0',
                        transition: 'all 0.3s ease',
                        opacity: mobileOpen ? 0 : 1,
                    }} />
                    <div style={{
                        width: '24px',
                        height: '2px',
                        background: 'var(--accent-green)',
                        transition: 'all 0.3s ease',
                        transform: mobileOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
                    }} />
                </button>

                {/* Mobile slide-in drawer */}
                <div
                    className="mobile-nav-drawer"
                    style={{
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        width: '280px',
                        background: 'rgba(7, 7, 13, 0.97)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        borderLeft: '1px solid rgba(0, 255, 65, 0.1)',
                        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
                        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        display: 'none',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '2rem',
                        zIndex: 105,
                    }}
                >
                    {navLinks.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                                color: 'var(--text-secondary)',
                                fontSize: '1.1rem',
                                fontFamily: 'var(--font-mono)',
                                letterSpacing: '1px',
                                transition: 'color 0.3s ease',
                                textDecoration: 'none',
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--accent-green)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                        >
                            //{item.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="btn btn-outline"
                        onClick={() => setMobileOpen(false)}
                        style={{
                            padding: '0.6rem 1.5rem',
                            fontSize: '0.9rem',
                            borderColor: 'var(--accent-green)',
                            color: 'var(--accent-green)',
                        }}
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile overlay backdrop */}
                {mobileOpen && (
                    <div
                        onClick={() => setMobileOpen(false)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 104,
                        }}
                        aria-hidden="true"
                    />
                )}
            </nav>
        </header>
    );
};

export default Navbar;
