import Section from './Section';
import { motion } from 'framer-motion';
import { Brain, Eye, Cpu } from 'lucide-react';

const interests = [
    {
        category: "AI Expertise",
        icon: <Brain size={24} />,
        items: [
            "Multimodal & VL Models (CLIP, SigLIP 2, Amazon Nova)",
            "Generative AI (Diffusion, GANs)",
            "Transformers",
            "Self-Supervised Learning",
            "Classical ML & CNNs",
            "Model Optimization (Quantization, Pruning, ONNX)"
        ]
    },
    {
        category: "Computer Vision",
        icon: <Eye size={24} />,
        items: [
            "Object Detection & Tracking",
            "Image & Semantic Segmentation",
            "Monocular Depth Estimation",
            "Motion Detection",
            "Heterogeneous Matching (Thermal-to-Visible, NIR-to-Visible)"
        ]
    },
    {
        category: "Efficient Edge AI",
        icon: <Cpu size={24} />,
        items: [
            "Resource-Constrained Neural Architectures",
            "Model Compression",
            "Hybrid Edge-Cloud Systems",
            "Low-Latency Inference"
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
                        transition={{ delay: index * 0.1 }}
                        style={{
                            background: 'var(--card-bg)',
                            padding: '24px',
                            borderRadius: '16px',
                            border: '1px solid var(--glass-border)',
                            marginBottom: '24px'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', color: 'var(--accent-blue)' }}>
                            {interest.icon}
                            <h3 style={{ fontSize: '20px', color: 'var(--text-primary)' }}>{interest.category}</h3>
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
                                        border: '1px solid rgba(255,255,255,0.1)'
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
