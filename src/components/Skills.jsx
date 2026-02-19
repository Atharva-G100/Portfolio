import React from 'react';

const skills = {
    'Languages': ['Java', 'JavaScript', 'C++', 'SQL'],
    'Frameworks': ['React', 'Node.js', 'Express.js', 'MongoDB', 'MySQL'],
    'Security': ['Kali Linux', 'Wireshark', 'Burp Suite', 'Nmap'],
    'Tools': ['Git', 'GitHub', 'VS Code', 'Linux'],
};

const Skills = () => {
    return (
        <section id="skills">
            <div className="section-label animate-in" style={{ color: 'var(--accent-green)' }}>//02. cat ~/.skills</div>
            <h2 className="animate-in animate-delay-1">
                Tech{' '}
                <span style={{
                    background: 'linear-gradient(135deg, #00ff41, var(--accent-cyan))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}>Arsenal</span>
            </h2>

            <div className="animate-in animate-delay-2" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                marginTop: '2rem',
            }}>
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                        <div style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.7rem',
                            color: 'var(--accent-green)',
                            marginBottom: '0.5rem',
                            letterSpacing: '0.5px',
                        }}>
                            {`// ${category}`}
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '0.5rem',
                        }}>
                            {items.map((skill) => (
                                <div
                                    key={skill}
                                    className="glass-card"
                                    style={{
                                        padding: '0.6rem 0.8rem',
                                        fontSize: '0.8rem',
                                        fontFamily: 'var(--font-mono)',
                                        color: 'var(--text-secondary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                    }}
                                >
                                    <span style={{ color: 'var(--accent-cyan)', fontSize: '0.7rem' }}>▹</span>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
