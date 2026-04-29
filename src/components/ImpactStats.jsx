import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Shield, TrendingUp, Globe, BookOpen } from 'lucide-react';
import Section from './Section';

const stats = [
    {
        icon: <Shield size={32} color="var(--accent-blue)" />,
        value: 4,
        suffix: "M+",
        label: "People Protected",
        description: "Securing homes across the US & UK"
    },
    {
        icon: <TrendingUp size={32} color="#4ECDC4" />,
        value: 4.5,
        prefix: "$",
        suffix: "M+",
        label: "Annual Cost Savings",
        description: "Generated via AI optimization"
    },
    {
        icon: <Globe size={32} color="#FFE66D" />,
        value: 10,
        suffix: "K+",
        label: "Global Researchers",
        description: "Utilizing TDFace infrastructure"
    },
    {
        icon: <BookOpen size={32} color="var(--accent-purple)" />,
        value: 550,
        suffix: "+",
        label: "Research Citations",
        description: "Scholarly impact in Computer Vision"
    }
];

const Counter = ({ value, prefix = "", suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(start);
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums' }}>
            {prefix}{Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}{suffix}
        </span>
    );
};

const ImpactStats = () => {
    return (
        <Section id="impact" title="Impact by the Numbers" layout="full-width">
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '16px',
                padding: '20px 0'
            }} className="impact-grid">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        className="impact-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        style={{
                            background: 'var(--card-bg)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '16px',
                            padding: '24px 16px',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '8px'
                        }}
                    >
                        <div style={{ marginBottom: '4px' }}>{stat.icon}</div>
                        <div style={{
                            fontSize: '32px',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            fontFamily: 'var(--font-display)'
                        }}>
                            <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                        </div>
                        <div style={{
                            fontSize: '13px',
                            fontWeight: 600,
                            color: 'var(--accent-blue)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                        }}>
                            {stat.label}
                        </div>
                        <div style={{
                            fontSize: '12px',
                            color: 'var(--text-secondary)',
                            lineHeight: '1.4'
                        }}>
                            {stat.description}
                        </div>
                    </motion.div>
                ))}
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (min-width: 768px) {
                    .impact-grid {
                        grid-template-columns: repeat(4, 1fr) !important;
                        gap: 24px !important;
                    }
                }
            `}} />
        </Section>
    );
};

export default ImpactStats;
