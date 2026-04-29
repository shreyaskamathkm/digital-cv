import Section from './Section';
import { motion } from 'framer-motion';
import { Code, Cloud, Layers, Database, Cpu } from 'lucide-react';

const skillsData = [
  {
    category: 'AI Expertise',
    icon: <Layers size={20} />,
    color: 'var(--accent-blue)',
    skills: [
      'Multimodal & VL Models (CLIP, SIGLIP-2, Amazon Nova/Bedrock)',
      'Agentic AI (Strands SDK)',
      'Generative AI (Diffusion, GANs)',
      'Transformers',
      'Contrastive Learning / Self-Supervised Pre-training',
      'Model Optimization (Quantization, Pruning, ONNX, TensorRT)',
    ],
  },
  {
    category: 'Computer Vision',
    icon: <Cpu size={20} />,
    color: '#4ECDC4',
    skills: [
      'Object Detection & Tracking (YOLO)',
      'Semantic Segmentation',
      'Edge AI / On-Device ML',
    ],
  },
  {
    category: 'MLOps & Infra',
    icon: <Database size={20} />,
    color: '#FF6B6B',
    skills: [
      'Ray / Ray Data (Distributed Training & ETL)',
      'Model Deployment (Edge & Cloud)',
      'Docker',
      'AWS (SageMaker, EC2, S3, Bedrock)',
      'Voxel51',
      'HPC / Singularity',
    ],
  },
  {
    category: 'Libraries',
    icon: <Code size={20} />,
    color: '#FFE66D',
    skills: [
      'PyTorch & Lightning AI',
      'OpenCV',
      'Python ecosystem (NumPy, pandas, scikit-learn)',
      'TensorFlow & Keras',
    ],
  },
  {
    category: 'Languages',
    icon: <Cloud size={20} />,
    color: '#bf5af2',
    skills: ['Python', 'C++', 'Bash'],
  },
];

const Skills = () => {
  return (
    <Section id="skills" title="Technical Skills" layout="side-by-side">
      <div
        className="skills-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{
              background: 'var(--card-bg)',
              padding: '24px',
              borderRadius: '16px',
              border: '1px solid var(--glass-border)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
                color: category.color,
              }}
            >
              {category.icon}
              <h3 style={{ fontSize: '18px', color: 'var(--text-primary)' }}>
                {category.category}
              </h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-secondary)',
                    background: 'rgba(255,255,255,0.03)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.06)',
                    lineHeight: '1.4',
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
