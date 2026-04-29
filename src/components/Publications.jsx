import Section from './Section';
import { motion } from 'framer-motion';

const patents = [
    {
        title: "Object detection via regions of interest.",
        details: "U.S. Patent No. US 11,922,669, issued 5 March 2024"
    },
    {
        title: "System and Method for Multimedia Analytic Processing and Display.",
        details: "U.S. Patent No. US 11,450,087, issued 20 Sep. 2022"
    },
    {
        title: "Detection and identification of defects using artificial intelligence analysis of multi-dimensional information data.",
        details: "U.S. Pub No. 2025/0005942 A1, filed Jan 2, 2025"
    },
    {
        title: "Deep Perceptual Image Enhancement.",
        details: "U.S. Pub No. 2024/0062530 A1, filed Feb 22, 2024"
    },
    {
        title: "Food and nutrient estimation, dietary assessment, evaluation, prediction, and management.",
        details: "U.S. Pub No. 2024/0055101 A1, filed Feb 15, 2024"
    },
    {
        title: "Fusion-Based Sensing Intelligence and Reporting.",
        details: "U.S. Pub No. 2024/0046612 A1, filed Feb 8, 2024"
    },
    {
        title: "Object Detection Via Panoramic Image Regions of Interest.",
        details: "U.S. Pub No. 2025/0182432 A1, filed Dec 1, 2023"
    }
];

const selectedPapers = [
    "Karen Panetta, Shreyas Kamath KM, Shishir Rao, and Sos S. Agaian, \"Deep Perceptual Image Enhancement Network for Exposure Restoration,\" in IEEE Transactions on Cybernetics, 2022.",
    "Karen Panetta, Shreyas Kamath KM, Srijith Rajeev, and Sos S. Agaian, \"FTNet: Feature Transverse Network for Thermal Image Semantic Segmentation,\" in IEEE Access, 2021.",
    "Karen Panetta, Srijith Rajeev, Shreyas Kamath KM, and Sos S. Agaian. \"Unrolling Post-Mortem 3D Fingerprints Using Mosaicking Pressure Simulation Technique.\" IEEE Access, 2019.",
    "Karen Panetta, Shreyas Kamath KM, Srijith Rajeev, and Sos S. Agaian. \"LQM: Localized Quality Measure for Fingerprint Image Enhancement.\" IEEE Access, 2019.",
    "Karen Panetta, Qianwen Wan, Sos S. Agaian, Srijith Rajeev, Shreyas Kamath KM, et al. \"A comprehensive database for benchmarking imaging systems.\" IEEE Transactions on Pattern Analysis and Machine Intelligence, 2018."
];

const Publications = () => {
    return (
        <Section id="publications" title="Research & IP" layout="full-width">
            {/* Citation Stats Banner */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '20px',
                marginBottom: '60px',
                padding: '32px',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '16px',
                border: '1px solid var(--glass-border)',
                textAlign: 'center'
            }}>
                <div>
                    <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--accent-blue)' }}>22</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', textTransform: 'uppercase', marginTop: '4px' }}>Peer-Reviewed Papers</div>
                </div>
                <div>
                    <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--accent-blue)' }}>533+</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', textTransform: 'uppercase', marginTop: '4px' }}>Research Citations</div>
                </div>
                <div>
                    <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--accent-blue)' }}>10</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', textTransform: 'uppercase', marginTop: '4px' }}>h-index</div>
                </div>
                <div style={{ gridColumn: 'span 1' }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: '1.2' }}>Top 4% Globally</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px' }}>In Computer Science (Clarivate ESI)</div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
                {/* Patents Column */}
                <div>
                    <h3 style={{ fontSize: '22px', marginBottom: '24px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        Patents
                    </h3>
                    {patents.map((item, index) => {
                        const isGranted = item.details.toLowerCase().includes('issued');
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                style={{ 
                                    marginBottom: '24px', 
                                    padding: '16px', 
                                    background: 'var(--card-bg)',
                                    borderRadius: '12px',
                                    border: '1px solid var(--glass-border)',
                                    position: 'relative'
                                }}
                            >
                                <span style={{
                                    position: 'absolute',
                                    top: '16px',
                                    right: '16px',
                                    fontSize: '10px',
                                    fontWeight: 700,
                                    padding: '2px 8px',
                                    borderRadius: '4px',
                                    background: isGranted ? 'rgba(78, 205, 196, 0.1)' : 'rgba(191, 90, 242, 0.1)',
                                    color: isGranted ? '#4ECDC4' : 'var(--accent-purple)',
                                    border: `1px solid ${isGranted ? 'rgba(78, 205, 196, 0.2)' : 'rgba(191, 90, 242, 0.2)'}`,
                                    textTransform: 'uppercase'
                                }}>
                                    {isGranted ? 'Granted' : 'Pending'}
                                </span>
                                <p style={{ color: 'var(--text-primary)', fontWeight: 500, marginBottom: '8px', paddingRight: '70px', fontSize: '15px' }}>{item.title}</p>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>{item.details}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Publications Column */}
                <div>
                    <h3 style={{ fontSize: '22px', marginBottom: '24px', color: 'var(--text-primary)' }}>Selected Publications</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {selectedPapers.map((paper, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                style={{ 
                                    padding: '16px', 
                                    background: 'rgba(255, 255, 255, 0.02)',
                                    borderRadius: '12px',
                                    borderLeft: '3px solid var(--accent-blue)',
                                    color: 'var(--text-secondary)',
                                    fontSize: '14px',
                                    lineHeight: '1.6'
                                }}
                            >
                                {paper}
                            </motion.div>
                        ))}
                    </div>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        style={{ marginTop: '32px', textAlign: 'center' }}
                    >
                        <a 
                            href="https://scholar.google.com/citations?user=dMTASX8AAAAJ" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ 
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: 'var(--accent-blue)',
                                textDecoration: 'none',
                                fontWeight: 600,
                                fontSize: '15px'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
                            onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
                        >
                            Full publication list with citation metrics →
                        </a>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default Publications;
