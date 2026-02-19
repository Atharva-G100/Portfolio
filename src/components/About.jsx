import React from 'react';

const education = {
    school: 'SIES Graduate School of Technology',
    location: 'Navi Mumbai, India',
    degree: 'B.E. in Computer Science (IoT, Cybersecurity & Blockchain)',
    period: 'Aug 2023 – May 2027',
    coursework: ['Data Structures', 'Algorithms', 'Computer Networks', 'Operating Systems', 'Database Systems', 'Cybersecurity Fundamentals'],
};

const experience = {
    company: 'Cyber Secured India',
    role: 'Cybersecurity Internship Trainee',
    period: 'Apr 2025 – Jun 2025',
    type: 'Remote',
    highlights: [
        'Completed intensive 3-month cybersecurity training in network security, ethical hacking & vulnerability assessment',
        'Hands-on with Nmap, Metasploit, Burp Suite, and Wireshark',
        'Participated in CTF competitions, developing security mindset',
        'Analyzed network traffic & identified vulnerabilities in simulated enterprise environments',
    ],
};

const About = () => {
    return (
        <section id="about">
            <div className="section-label animate-in" style={{ color: 'var(--accent-green)' }}>//01. whoami</div>
            <h2 className="animate-in animate-delay-1">
                About{' '}
                <span style={{
                    background: 'linear-gradient(135deg, #00ff41, var(--accent-cyan))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}>Me</span>
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                marginTop: '2rem',
                alignItems: 'start',
            }}>
                {/* Left Column — Bio */}
                <div className="animate-in animate-delay-2">
                    <p style={{
                        color: 'var(--text-secondary)',
                        lineHeight: 1.8,
                        marginBottom: '1.5rem',
                        fontSize: '0.95rem',
                    }}>
                        I'm <strong style={{ color: 'var(--text-primary)' }}>Atharva Gawas</strong> — a developer
                        passionate about cybersecurity and AI. I love building things that solve real problems,
                        whether it's a full-stack app, a security tool, or an AI-powered project.
                    </p>
                    <p style={{
                        color: 'var(--text-secondary)',
                        lineHeight: 1.8,
                        fontSize: '0.95rem',
                        marginBottom: '1.5rem',
                    }}>
                        When I'm not coding, you'll find me competing in CTF challenges, exploring new
                        attack vectors, or experimenting with machine learning models. I believe the best
                        software is built by people who know how to break it.
                    </p>

                    {/* Terminal motto */}
                    <div style={{
                        padding: '1rem',
                        background: 'rgba(0, 255, 65, 0.03)',
                        border: '1px solid rgba(0, 255, 65, 0.1)',
                        borderRadius: '4px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.8,
                    }}>
                        <span style={{ color: 'var(--accent-green)' }}>$</span> cat /etc/motto<br />
                        <span style={{ color: 'var(--text-secondary)' }}>"Break it, understand it, build it better."</span>
                    </div>
                </div>

                {/* Right Column — Education + Experience */}
                <div className="animate-in animate-delay-3">
                    {/* Education Card */}
                    <div className="glass-card" style={{ marginBottom: '1rem', padding: '1rem 1.25rem' }}>
                        <div style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.7rem',
                            color: 'var(--accent-green)',
                            marginBottom: '0.5rem',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                        }}>
                            //Education
                        </div>
                        <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                            {education.degree}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            {education.school} • {education.period}
                        </div>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.4rem',
                            marginTop: '0.75rem',
                        }}>
                            {education.coursework.map((c) => (
                                <span key={c} style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.65rem',
                                    color: 'var(--text-muted)',
                                    padding: '0.2rem 0.5rem',
                                    border: '1px solid var(--border-subtle)',
                                    borderRadius: '2px',
                                }}>{c}</span>
                            ))}
                        </div>
                    </div>

                    {/* Experience Card */}
                    <div className="glass-card" style={{ padding: '1rem 1.25rem' }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '0.5rem',
                        }}>
                            <div style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.7rem',
                                color: 'var(--accent-green)',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                            }}>
                                //Experience
                            </div>
                            <span style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.6rem',
                                color: 'var(--accent-cyan)',
                                padding: '0.15rem 0.4rem',
                                border: '1px solid rgba(34, 211, 238, 0.2)',
                                borderRadius: '2px',
                            }}>{experience.type}</span>
                        </div>
                        <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.15rem' }}>
                            {experience.role}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                            {experience.company} • {experience.period}
                        </div>
                        <ul style={{ paddingLeft: '0', listStyle: 'none' }}>
                            {experience.highlights.map((h, i) => (
                                <li key={i} style={{
                                    fontSize: '0.8rem',
                                    color: 'var(--text-muted)',
                                    lineHeight: 1.6,
                                    marginBottom: '0.3rem',
                                    display: 'flex',
                                    gap: '0.5rem',
                                }}>
                                    <span style={{ color: 'var(--accent-green)', flexShrink: 0 }}>▹</span>
                                    {h}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
