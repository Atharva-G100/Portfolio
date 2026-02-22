import React, { useRef, useEffect, useState } from 'react';

/* ───── Matrix Rain Canvas ───── */
const MatrixCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationId;

        const resize = () => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };
        resize();
        window.addEventListener('resize', resize);

        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン{}[]<>!@#$%^&*';
        const fontSize = 14;
        const w = canvas.offsetWidth;
        const columns = Math.floor(w / fontSize);
        const drops = new Array(columns).fill(1).map(() => Math.random() * -100);

        const draw = () => {
            const w = canvas.offsetWidth;
            const h = canvas.offsetHeight;

            ctx.fillStyle = 'rgba(7, 7, 13, 0.05)';
            ctx.fillRect(0, 0, w, h);

            for (let i = 0; i < drops.length; i++) {
                const char = chars[Math.floor(Math.random() * chars.length)];
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                if (Math.random() > 0.97) {
                    ctx.fillStyle = '#00ff41';
                    ctx.shadowColor = '#00ff41';
                    ctx.shadowBlur = 8;
                } else {
                    ctx.fillStyle = `rgba(0, 255, 65, ${Math.random() * 0.3 + 0.05})`;
                    ctx.shadowBlur = 0;
                }

                ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;
                ctx.fillText(char, x, y);
                ctx.shadowBlur = 0;

                if (y > h && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }

            animationId = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '50%',
                height: '100%',
                pointerEvents: 'none',
                opacity: 0.4,
                maskImage: 'linear-gradient(to left, rgba(0,0,0,0.8) 0%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.8) 0%, transparent 100%)',
            }}
        />
    );
};

/* ───── Typing Effect ───── */
const TypingText = ({ text, delay = 0 }) => {
    const [displayed, setDisplayed] = useState('');
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let timeout;
        let i = 0;
        const startTyping = () => {
            timeout = setTimeout(() => {
                const interval = setInterval(() => {
                    if (i < text.length) {
                        setDisplayed(text.slice(0, i + 1));
                        i++;
                    } else {
                        clearInterval(interval);
                    }
                }, 50);
            }, delay);
        };
        startTyping();
        return () => clearTimeout(timeout);
    }, [text, delay]);

    useEffect(() => {
        const blink = setInterval(() => setShowCursor(v => !v), 530);
        return () => clearInterval(blink);
    }, []);

    return (
        <span>
            {displayed}
            <span style={{
                color: 'var(--accent-green)',
                opacity: showCursor ? 1 : 0,
                transition: 'opacity 0.1s',
            }}>_</span>
        </span>
    );
};

/* ───── Stat Counter ───── */
const StatItem = ({ value, label }) => (
    <div style={{
        textAlign: 'center',
        padding: '1rem 1.5rem',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '4px',
        backdropFilter: 'blur(10px)',
        minWidth: '140px',
        transition: 'all 0.3s ease',
    }}
        onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(0, 255, 65, 0.3)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.15)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-subtle)';
            e.currentTarget.style.boxShadow = 'none';
        }}
    >
        <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'var(--accent-green)',
            marginBottom: '0.25rem',
        }}>
            {value}
        </div>
        <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
        }}>
            {label}
        </div>
    </div>
);

/* ───── Hero Component ───── */
const Hero = () => {
    return (
        <section
            id="hero"
            aria-label="Introduction — Atharva Gawas"
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '5rem',
            }}
        >
            <MatrixCanvas />

            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at 30% 50%, rgba(0, 255, 65, 0.03) 0%, transparent 60%)',
                pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', zIndex: 2, maxWidth: '650px' }}>
                <div className="section-label animate-in animate-delay-1" style={{ color: 'var(--accent-green)' }}>
                    {'>'} ./atharva_gawas --init
                </div>

                <h1 className="animate-in animate-delay-2" style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    marginBottom: '1.5rem',
                    letterSpacing: '-1px',
                }}>
                    <span style={{ color: 'var(--text-primary)' }}>Breaking & </span>
                    <br />
                    <span style={{
                        background: 'linear-gradient(135deg, #00ff41, var(--accent-cyan))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                        Building Systems
                    </span>
                </h1>

                <div className="animate-in animate-delay-3" style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    maxWidth: '520px',
                    marginBottom: '2rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 300,
                }}>
                    <TypingText
                        text="Developer. CTF competitor. Passionate about cybersecurity & AI. Building software with a hacker's mindset. Open to internships & opportunities."
                        delay={800}
                    />
                </div>

                <div className="animate-in animate-delay-4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <a href="#projects" className="btn btn-outline" style={{ borderColor: 'rgba(0, 255, 65, 0.3)', color: 'var(--text-primary)' }}>
                        View Projects
                    </a>
                    <a href="/Atharva_Gawas_Resume.pdf" download className="btn btn-outline" style={{ borderColor: 'var(--accent-cyan)', color: 'var(--accent-cyan)' }}>
                        Resume ↓
                    </a>
                    <a href="#contact" className="btn btn-filled" style={{ background: '#00cc33', borderColor: '#00cc33' }}>
                        Get in Touch
                    </a>
                </div>
            </div>

            <div className="animate-in animate-delay-5" style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                gap: '1rem',
                marginTop: 'auto',
                paddingBottom: '2rem',
                flexWrap: 'wrap',
            }}>
                <StatItem value="Dev" label="Builder" />
                <StatItem value="CTF" label="Active Player" />
                <StatItem value="10+" label="Technologies" />
                <StatItem value="24/7" label="Learning" />
            </div>
        </section>
    );
};

export default Hero;
