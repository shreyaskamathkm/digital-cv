import Section from './Section';
import { motion } from 'framer-motion';

const awards = [
    "Awardee of Stern Endowed Graduate Research Fellowship for outstanding achievements and scholarly promise – 2020, 2021",
    "Awardee of School of Engineering Award for Outstanding Academic Scholarship - 2020",
    "Awardee of Graduate Student Research Competition - 2019",
    "Second Place in Sight and Life competition at the American Society for Nutrition - 2018",
    "One of seven finalists at Tufts Food and Nutrition Entrepreneurship Competition - 2018",
    "Received 3D Image Analysis and Classification System Research Competitive Scholarship (2015-2016)",
    "Awardee of Alvarez Master's Research Competitive Scholarship – 2015"
];

const reviewExperience = [
    "European Research Council (2025)",
    "IEEE Open Journal of the Computer Society (2025)",
    "IEEE Transactions on Consumer Electronics (2025)",
    "IEEE Transactions on Artificial Intelligence (2021 – Present)",
    "IEEE Transactions on Systems, Man, and Cybernetics: Systems (2018 – Present)",
    "IEEE Access (2019, 2025)",
    "MDPI (2022 – Present)"
];

const Awards = () => {
    return (
        <Section id="awards" title="Awards & Activities" layout="side-by-side">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
                <div>
                    <h3 style={{ fontSize: '20px', marginBottom: '20px', color: 'var(--text-primary)' }}>Honors & Awards</h3>
                    <ul style={{ paddingLeft: '20px', listStyle: 'disc' }}>
                        {awards.map((award, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                style={{ marginBottom: '12px', color: 'var(--text-secondary)' }}
                            >
                                {award}
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 style={{ fontSize: '20px', marginBottom: '20px', color: 'var(--text-primary)' }}>Professional Service (Reviewer)</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {reviewExperience.map((item, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    color: 'var(--text-secondary)',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '14px',
                                    border: '1px solid var(--glass-border)'
                                }}
                            >
                                {item}
                            </motion.span>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 style={{ fontSize: '20px', marginBottom: '10px', color: 'var(--text-primary)' }}>Affiliations</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Member of IEEE Eta Kappa Nu (IEEE-HKN)</p>
                    <p style={{ color: 'var(--text-secondary)' }}>Institute of Electrical and Electronics Engineers (IEEE) society</p>
                </div>
            </div>
        </Section>
    );
};

export default Awards;
