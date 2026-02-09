import Section from './Section';
import { motion } from 'framer-motion';
import { Code, Terminal, Cloud, Layers, Database, Workflow, CheckCircle } from 'lucide-react';

const skillsData = [
    {
        category: "Frameworks & Libraries",
        icon: <Terminal size={20} />,
        skills: ["PyTorch", "PyTorch Lightning", "Ray (Distributed)", "ONNX", "Voxel51", "TensorFlow", "Keras", "OpenCV", "NumPy", "Pandas", "Scikit-Learn"]
    },
    {
        category: "Engineering Practices",
        icon: <CheckCircle size={20} />,
        skills: ["TDD", "pytest", "CI/CD", "Git/GitHub", "Docker", "Singularity", "Agile"]
    },
    {
        category: "Programming Languages",
        icon: <Code size={20} />,
        skills: ["Python", "MATLAB", "C/C++"]
    },
    {
        category: "Cloud Platforms",
        icon: <Cloud size={20} />,
        skills: ["AWS EC2", "AWS Bedrock", "AWS S3", "AWS Rekognition", "AWS SageMaker", "HPC"]
    },
];

const Skills = () => {
    return (
        <Section id="skills" title="Technical Skills" layout="side-by-side">
            <div className="skills-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '24px'
            }}>
                {skillsData.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        style={{
                            background: 'var(--card-bg)',
                            padding: '24px',
                            borderRadius: '16px',
                            border: '1px solid var(--glass-border)',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', color: 'var(--accent-purple)' }}>
                            {category.icon}
                            <h3 style={{ fontSize: '18px', color: 'var(--text-primary)' }}>{category.category}</h3>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {category.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    style={{
                                        fontSize: '14px',
                                        color: 'var(--text-secondary)',
                                        background: 'rgba(255,255,255,0.03)',
                                        padding: '4px 10px',
                                        borderRadius: '6px'
                                    }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
