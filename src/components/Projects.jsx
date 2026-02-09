import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Database, Terminal } from 'lucide-react';
import Section from './Section';

const projects = [
    {
        title: "Video Similarity Search",
        description: "A semantic video search engine that allows users to search through video content using natural language queries. It leverages state-of-the-art vision-language models like CLIP to generate embeddings and uses vector databases for high-speed retrieval.",
        tech: ["Python", "CLIP", "Faiss", "OpenCV", "PyTorch"],
        link: "https://github.com/shreyaskamathkm/Video-Similarity-Search",
        icon: <Database size={24} color="#4ECDC4" />
    },
    {
        title: "FTNet (Feature Transverse Network)",
        description: "Official PyTorch implementation of the FTNet paper for thermal image semantic segmentation. This novel architecture uses a feature transverse module to capture multi-scale context, significantly improving segmentation accuracy on thermal imagery datasets.",
        tech: ["PyTorch", "Computer Vision", "Semantic Segmentation", "Deep Learning"],
        link: "https://github.com/shreyaskamathkm/FTNet",
        icon: <Code size={24} color="#FF6B6B" />
    },
    {
        title: "Python Package Blueprint",
        description: "A comprehensive Cookiecutter template for creating modern, production-ready Python packages. It includes pre-configured setups for CI/CD (GitHub Actions), testing (pytest), linting (Ruff/Black), and documentation, adhering to current industry best practices.",
        tech: ["Python", "Cookiecutter", "GitHub Actions", "CI/CD", "Packaging"],
        link: "https://github.com/shreyaskamathkm/python-package-blueprint",
        icon: <Terminal size={24} color="#FFE66D" />
    }
];

const Projects = () => {
    return (
        <Section id="projects" title="Projects" layout="side-by-side">
            <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '16px',
                            padding: '24px',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '10px', borderRadius: '12px' }}>
                                {project.icon}
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                                onMouseOver={(e) => e.target.style.color = '#fff'}
                                onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                            >
                                <Github size={20} />
                            </a>
                        </div>

                        <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#fff' }}>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
                                onMouseOver={(e) => e.target.style.color = 'var(--accent-blue)'}
                                onMouseOut={(e) => e.target.style.color = '#fff'}
                            >
                                {project.title}
                            </a>
                        </h3>

                        <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>
                            {project.description}
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {project.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    style={{
                                        fontSize: '12px',
                                        padding: '4px 10px',
                                        borderRadius: '20px',
                                        background: 'rgba(56, 189, 248, 0.1)',
                                        color: 'var(--accent-blue)',
                                        border: '1px solid rgba(56, 189, 248, 0.2)'
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
