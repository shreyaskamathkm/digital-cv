import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  Brain,
  Eye,
  Cpu,
  Rocket,
  Linkedin,
  Github,
  GraduationCap,
} from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="hero" ref={ref} id="top">
      <motion.div className="hero-content" style={{ y, opacity }}>
        <div className="hero-image-container">
          <img
            src={`${import.meta.env.BASE_URL}images/shreyas.jpg`}
            alt="Shreyas Kamath"
            className="hero-image"
          />
        </div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
        >
          Shreyas Kamath
        </motion.h1>

        <motion.h2
          className="hero-role"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontSize: '24px',
            fontWeight: 600,
            color: 'var(--accent-blue)',
            marginBottom: '16px',
          }}
        >
          Senior ML Engineer · SimpliSafe
        </motion.h2>

        <motion.p
          className="hero-mission"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            maxWidth: '600px',
            margin: '0 auto 32px',
            fontSize: '18px',
            lineHeight: '1.6',
            color: 'var(--text-secondary)',
          }}
        >
          Building AI systems that protect over 4 million homes — from the
          models that detect threats to the infrastructure that trains and
          deploys them at scale.
        </motion.p>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
        >
          <span
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <Brain size={20} color="#FF6B6B" /> AI Expertise
          </span>
          <span className="separator" style={{ margin: '0 10px' }}>
            |
          </span>
          <span
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <Eye size={20} color="#4ECDC4" /> Computer Vision
          </span>
          <span className="separator" style={{ margin: '0 10px' }}>
            |
          </span>
          <span
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <Cpu size={20} color="#FFE66D" /> Deep Learning
          </span>
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ display: 'flex', gap: '15px' }}>
            <a
              href="https://www.linkedin.com/in/shreyaskamath/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--text-secondary)',
                transition: 'color 0.3s',
              }}
              onMouseOver={(e) => (e.target.style.color = '#0077b5')}
              onMouseOut={(e) =>
                (e.target.style.color = 'var(--text-secondary)')
              }
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/shreyaskamathkm"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--text-secondary)',
                transition: 'color 0.3s',
              }}
              onMouseOver={(e) => (e.target.style.color = '#fff')}
              onMouseOut={(e) =>
                (e.target.style.color = 'var(--text-secondary)')
              }
            >
              <Github size={24} />
            </a>
            <a
              href="https://scholar.google.com/citations?user=dMTASX8AAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--text-secondary)',
                transition: 'color 0.3s',
              }}
              onMouseOver={(e) => (e.target.style.color = '#4285F4')}
              onMouseOut={(e) =>
                (e.target.style.color = 'var(--text-secondary)')
              }
            >
              <GraduationCap size={24} />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <div className="hero-background">
        {/* Abstract background element */}
        <div className="glow-orb"></div>
      </div>
    </section>
  );
};

export default Hero;
