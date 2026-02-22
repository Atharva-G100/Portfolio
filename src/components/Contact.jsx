import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // '', 'submitting', 'success', 'error'

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch("https://formspree.io/f/xdalwrnn", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" aria-label="Contact Atharva Gawas" style={{ paddingBottom: '4rem' }}>
            <div style={{
                maxWidth: '600px',
                margin: '0 auto',
            }}>
                <div style={{ textAlign: 'center' }}>
                    <div className="section-label animate-in" style={{ color: 'var(--accent-green)' }}>
                        //04. ping atharva
                    </div>

                    <h2 className="animate-in animate-delay-1" style={{
                        fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                        marginBottom: '1.5rem',
                    }}>
                        Let's{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #00ff41, var(--accent-cyan))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>connect</span>
                    </h2>

                    <p className="animate-in animate-delay-2" style={{
                        color: 'var(--text-secondary)',
                        lineHeight: 1.8,
                        marginBottom: '3rem',
                        fontSize: '0.95rem',
                    }}>
                        Looking for a teammate for CTF comps? Want to collaborate on a
                        cybersec or AI project? Or just want to talk tech? I'm always
                        open to new opportunities and conversations.
                    </p>
                </div>

                {/* Contact Form */}
                <div className="glass-card animate-in animate-delay-3" style={{ padding: '2rem', marginBottom: '3rem' }}>
                    {status === 'success' ? (
                        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Message Received!</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>I'll get back to you as soon as possible.</p>
                            <button
                                onClick={() => setStatus('')}
                                className="btn btn-outline"
                                style={{ marginTop: '1.5rem', fontSize: '0.8rem' }}
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label htmlFor="contact-name" style={{
                                    display: 'block',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.8rem',
                                    color: 'var(--accent-green)',
                                    marginBottom: '0.5rem'
                                }}>
                                    Name
                                </label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid var(--border-subtle)',
                                        borderRadius: '4px',
                                        color: 'var(--text-primary)',
                                        fontFamily: 'var(--font-sans)',
                                        outline: 'none'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-green)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                                />
                            </div>

                            <div>
                                <label htmlFor="contact-email" style={{
                                    display: 'block',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.8rem',
                                    color: 'var(--accent-green)',
                                    marginBottom: '0.5rem'
                                }}>
                                    Email
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid var(--border-subtle)',
                                        borderRadius: '4px',
                                        color: 'var(--text-primary)',
                                        fontFamily: 'var(--font-sans)',
                                        outline: 'none'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-green)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                                />
                            </div>

                            <div>
                                <label htmlFor="contact-message" style={{
                                    display: 'block',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.8rem',
                                    color: 'var(--accent-green)',
                                    marginBottom: '0.5rem'
                                }}>
                                    Message
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid var(--border-subtle)',
                                        borderRadius: '4px',
                                        color: 'var(--text-primary)',
                                        fontFamily: 'var(--font-sans)',
                                        outline: 'none',
                                        resize: 'vertical'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-green)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="btn btn-filled"
                                style={{
                                    alignSelf: 'flex-start',
                                    background: '#00cc33',
                                    borderColor: '#00cc33',
                                    opacity: status === 'submitting' ? 0.7 : 1,
                                    cursor: status === 'submitting' ? 'wait' : 'pointer'
                                }}
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                            </button>

                            {status === 'error' && (
                                <div style={{ color: '#ff4444', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                                    Something went wrong. Please try again or email me directly.
                                </div>
                            )}
                        </form>
                    )}
                </div>

                {/* Social links & Footer (centered) */}
                <div className="animate-in animate-delay-4" style={{ textAlign: 'center' }}>
                    <div style={{
                        marginBottom: '2rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)',
                    }}>
                        Or email directly: <a href="mailto:gawasatharva8@gmail.com" style={{ color: 'var(--accent-green)' }}>gawasatharva8@gmail.com</a>
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '2rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                    }}>
                        <a
                            href="https://github.com/Atharva-G100"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'var(--text-muted)',
                                transition: 'color 0.3s ease',
                                letterSpacing: '0.5px',
                            }}
                            onMouseEnter={(e) => e.target.style.color = '#00ff41'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                        >
                            [GitHub]
                        </a>
                        <a
                            href="https://linkedin.com/in/atharvagawas-valak"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'var(--text-muted)',
                                transition: 'color 0.3s ease',
                                letterSpacing: '0.5px',
                            }}
                            onMouseEnter={(e) => e.target.style.color = '#00ff41'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                        >
                            [LinkedIn]
                        </a>
                    </div>

                    <div style={{
                        marginTop: '4rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.5px',
                    }}>
                        <span style={{ color: 'var(--accent-green)' }}>$</span> echo "Designed & built by Atharva Gawas"
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
