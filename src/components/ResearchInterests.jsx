import Section from './Section';
import { motion } from 'framer-motion';
import { Brain, Eye, Zap, Database } from 'lucide-react';

const interests = [
    {
        category: "AI & Foundation Models",
        icon: <Brain size={24} />,
        color: 'var(--accent-blue)',
        items: [
            "Multimodal & Vision-Language Models (CLIP, SigLIP-2)",
            "Agentic AI & Autonomous Systems",
            "Generative AI (Diffusion Models, GANs)",
            "Transformers & Attention Mechanisms",
            "Contrastive & Self-Supervised Learning",
            "Large Language Models applied to Vision"
        ]
    },
    {
        category: "Computer Vision",
        icon: <Eye size={24} />,
        color: '#4ECDC4',
        items: [
            "Real-Time Object Detection & Tracking",
            "Semantic & Instance Segmentation",
            "Monocular Depth Estimation",
            "Heterogeneous Image Matching (Thermal-to-Visible, NIR-to-Visible)",
            "Biometrics & Multimodal Facial Recognition",
            "AI for Medical & Nutritional Imaging"
        ]
    },
    {
        category: "Efficient AI Systems",
        icon: <Zap size={24} />,
        color: '#FFE66D',
        items: [
            "On-Device AI for Resource-Constrained Hardware",
            "Efficient Architecture Design & Neural Search",
            "Knowledge Distillation & Pruning",
            "Real-Time Inference at Scale",
            "Edge-Cloud Hybrid Intelligence"
        ]
    }
];

const ResearchInterests = () => {
    return (
        <Section id="research-interests" title="Research Interests" layout="side-by-side">
            <div className="interests-grid">
                {interests.map((interest, index) => (
                    <motion.div
                        key={index}
                        className="interest-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        style={{
                            background: 'var(--card-bg)',
                            padding: '24px',
                            borderRadius: '16px',
                            border: '1px solid var(--glass-border)',
                            marginBottom: '24px'
                        }}
                    >
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            marginBottom: '16px',
                            color: interest.color
                        }}>
                            {interest.icon}
                            <h3 style={{ fontSize: '20px', color: 'var(--text-primary)' }}>
                                {interest.category}
                            </h3>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {interest.items.map((item, i) => (
                                <span
                                    key={i}
                                    style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        padding: '6px 12px',
                                        borderRadius: '20px',
                                        fontSize: '14px',
                                        color: 'var(--text-secondary)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        lineHeight: '1.4'
                                    }}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default ResearchInterests;