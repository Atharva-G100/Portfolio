import React from 'react';

const projects = [
    {
        title: 'Threat Modeling using Agentic AI',
        desc: 'Web-based security analysis tool that identifies threats using the STRIDE framework. An AI agent analyzes system descriptions and generates structured threat reports with DREAD scoring to assess and prioritize risks.',
        tags: ['Python', 'AI/ML', 'STRIDE', 'DREAD', 'Web App'],
        link: '#',
        status: 'ACADEMIC',
    },
    {
        title: 'CTF Challenge Suite',
        desc: 'Custom-built Capture The Flag challenges spanning cryptography, web exploitation, and reverse engineering — designed for practice and team competitions.',
        tags: ['Python', 'Crypto', 'Web Exploit', 'Linux'],
        link: '#',
        status: 'ACTIVE',
    },
    {
        title: 'Portfolio Website',
        desc: 'This cybersec-themed portfolio built with React & Vite, featuring Matrix rain animation, custom cursor targeting, and terminal-inspired UI design.',
        tags: ['React', 'Vite', 'JavaScript', 'GSAP'],
        link: '#',
        status: 'LIVE',
    },
];

const statusColors = {
    'ACADEMIC': 'var(--accent-purple)',
    'ACTIVE': '#00ff41',
    'LIVE': 'var(--accent-cyan)',
    'IN DEV': 'var(--accent-warm)',
    'COMPLETE': 'var(--accent-cyan)',
};

const certifications = [
    {
        title: 'CTF Competitions',
        detail: 'Active participant (2024 – Present) — Cryptography, web exploitation, reverse engineering',
    },
    {
        title: 'Cybersecurity Training',
        detail: 'Cyber Secured India — Network security, ethical hacking, vulnerability assessment',
    },
];

const ProjectCard = ({ project, index }) => (
    <div
        className="glass-card animate-in"
        style={{
            animationDelay: `${0.15 * (index + 1)}s`,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            position: 'relative',
            overflow: 'hidden',
        }}
    >
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, #00ff41, var(--accent-cyan), transparent)',
            opacity: 0.6,
        }} />

        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                letterSpacing: '1px',
            }}>
                //0{index + 1}
            </div>
            <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: statusColors[project.status],
                padding: '0.2rem 0.5rem',
                border: `1px solid ${statusColors[project.status]}33`,
                borderRadius: '2px',
                letterSpacing: '1px',
            }}>
                [{project.status}]
            </div>
        </div>

        <h3 style={{
            fontSize: '1.15rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
        }}>
            {project.title}
        </h3>

        <p style={{
            fontSize: '0.88rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            flex: 1,
        }}>
            {project.desc}
        </p>

        <div style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
        }}>
            {project.tags.map((tag) => (
                <span
                    key={tag}
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: '#00ff41',
                        padding: '0.25rem 0.6rem',
                        border: '1px solid rgba(0, 255, 65, 0.2)',
                        borderRadius: '2px',
                        letterSpacing: '0.5px',
                    }}
                >
                    {tag}
                </span>
            ))}
        </div>

        <a
            href={project.link}
            style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--accent-green)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'all 0.3s ease',
                marginTop: '0.5rem',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00ff41';
                e.currentTarget.style.gap = '0.7rem';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--accent-green)';
                e.currentTarget.style.gap = '0.4rem';
            }}
        >
            View Project <span>→</span>
        </a>
    </div>
);

const Projects = () => {
    return (
        <section id="projects">
            <div className="section-label animate-in" style={{ color: 'var(--accent-green)' }}>//03. ls -la ~/projects</div>
            <h2 className="animate-in animate-delay-1">
                Things I've{' '}
                <span style={{
                    background: 'linear-gradient(135deg, #00ff41, var(--accent-cyan))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}>built & broken</span>
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem',
                marginTop: '2.5rem',
            }}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>

            {/* Certifications & Achievements */}
            <div style={{ marginTop: '3rem' }}>
                <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    marginBottom: '1rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                }}>
                    //Certifications & Achievements
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                    {certifications.map((cert) => (
                        <div key={cert.title} className="glass-card" style={{ padding: '1rem 1.25rem' }}>
                            <div style={{
                                fontSize: '0.95rem',
                                fontWeight: 600,
                                color: 'var(--text-primary)',
                                marginBottom: '0.3rem',
                            }}>{cert.title}</div>
                            <div style={{
                                fontSize: '0.8rem',
                                color: 'var(--text-muted)',
                                fontFamily: 'var(--font-mono)',
                            }}>{cert.detail}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
