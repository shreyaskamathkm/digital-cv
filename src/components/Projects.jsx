import { motion } from 'framer-motion';
import {
  Github,
  ExternalLink,
  Code,
  Database,
  Terminal,
  Eye,
} from 'lucide-react';
import Section from './Section';

const projects = [
  {
    title: 'Video Similarity Search',
    description:
      'A semantic video search engine that allows users to search through video content using natural language queries. It leverages state-of-the-art vision-language models like CLIP to generate embeddings and uses vector databases for high-speed retrieval.',
    tech: ['Python', 'CLIP', 'Faiss', 'OpenCV', 'PyTorch'],
    link: 'https://github.com/shreyaskamathkm/Video-Similarity-Search',
    icon: <Database size={24} color="#4ECDC4" />,
  },
  {
    title: 'FTNet (Feature Transverse Network)',
    description:
      'Official PyTorch implementation of the FTNet paper for thermal image semantic segmentation. This novel architecture uses a feature transverse module to capture multi-scale context, significantly improving segmentation accuracy on thermal imagery datasets.',
    tech: [
      'PyTorch',
      'Computer Vision',
      'Semantic Segmentation',
      'Deep Learning',
    ],
    link: 'https://github.com/shreyaskamathkm/FTNet',
    icon: <Code size={24} color="#FF6B6B" />,
  },
  {
    title: 'YOLO (v9, v7, YOLO-RD)',
    description:
      'A community-maintained, batteries-included implementation of YOLOv9, YOLOv7, and YOLO-RD. Features one-command setup, comprehensive documentation, and automated CI/CD pipelines for robust object detection deployment.',
    tech: ['Python', 'PyTorch', 'YOLOv9', 'CI/CD', 'Docker', 'ONNX'],
    link: 'https://github.com/shreyaskamathkm/yolo',
    stats: '12+ Releases · MIT Licensed',
    icon: <Eye size={24} color="#4ECDC4" />,
  },
  {
    title: 'TDFace Database',
    description:
      'A large-scale multimodal facial recognition database comprising 100K+ images across 7 imaging modalities — thermal, NIR, 3D, visible, sketch, and more. Now used by 10,000+ researchers across 40+ countries including defense and academic institutions worldwide.',
    tech: [
      'Computer Vision',
      'Biometrics',
      'Multimodal AI',
      'Thermal Imaging',
      'NIR',
    ],
    link: 'https://tdface.ece.tufts.edu/',
    stats: '10K+ downloads · 40+ countries',
    icon: <Database size={24} color="#FFE66D" />,
  },
];

const Projects = () => {
  return (
    <Section id="projects" title="Projects" layout="side-by-side">
      <div
        className="projects-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}
      >
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
              border: '1px solid var(--glass-border)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '10px',
                  borderRadius: '12px',
                }}
              >
                {project.icon}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--text-secondary)',
                  transition: 'color 0.2s',
                }}
                onMouseOver={(e) => (e.target.style.color = '#fff')}
                onMouseOut={(e) =>
                  (e.target.style.color = 'var(--text-secondary)')
                }
              >
                {project.link.includes('github.com') ? (
                  <Github size={20} />
                ) : (
                  <ExternalLink size={20} />
                )}
              </a>
            </div>

            <h3
              style={{
                fontSize: '18px',
                fontWeight: 600,
                marginBottom: '8px',
                color: '#fff',
              }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
                onMouseOver={(e) =>
                  (e.target.style.color = 'var(--accent-blue)')
                }
                onMouseOut={(e) => (e.target.style.color = '#fff')}
              >
                {project.title}
              </a>
            </h3>

            {project.stats && (
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--accent-purple)',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                {project.stats}
              </div>
            )}

            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '14px',
                lineHeight: '1.6',
                marginBottom: '20px',
                flex: 1,
              }}
            >
              {project.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '11px',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    background: 'rgba(56, 189, 248, 0.05)',
                    color: 'var(--accent-blue)',
                    border: '1px solid rgba(56, 189, 248, 0.1)',
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
