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
        <Section id="publications" title="Patents & Publications" layout="side-by-side">
            <h3 style={{ fontSize: '24px', marginBottom: '24px', color: 'var(--text-primary)' }}>Patents</h3>
            <div style={{ marginBottom: '60px' }}>
                {patents.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        style={{ marginBottom: '20px', paddingLeft: '16px', borderLeft: '2px solid var(--accent-blue)' }}
                    >
                        <p style={{ color: 'var(--text-primary)', fontWeight: 500, marginBottom: '4px' }}>{item.title}</p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{item.details}</p>
                    </motion.div>
                ))}
            </div>

            <h3 style={{ fontSize: '24px', marginBottom: '24px', color: 'var(--text-primary)' }}>Selected Publications</h3>
            <div>
                {selectedPapers.map((paper, index) => (
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        style={{ marginBottom: '20px', paddingLeft: '16px', borderLeft: '2px solid var(--accent-blue)', color: 'var(--text-secondary)', lineHeight: '1.6' }}
                    >
                        {paper}
                    </motion.p>
                ))}
                <p style={{ marginTop: '20px', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                    ...and many more conference papers. See <a href="https://scholar.google.com/citations?user=dMTASX8AAAAJ" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)' }}>Google Scholar</a> for full list.
                </p>
            </div>
        </Section>
    );
};

export default Publications;
