import { motion } from 'framer-motion';

const Section = ({ id, title, children, className = "", layout = "center" }) => {
    // layout: 'center' | 'side-by-side'

    if (layout === 'side-by-side') {
        // Side-by-side layout logic
        return (
            <section id={id} className={`section ${className}`} style={{ padding: '100px 0', position: 'relative' }}>
                <div className="container side-by-side-grid">
                    <div className="section-header-col">
                        {title && (
                            <motion.h2
                                className="section-title sticky-title"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                {title}
                            </motion.h2>
                        )}
                    </div>
                    <div className="section-content-col">
                        {children}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id={id} className={`section ${className}`} style={{ padding: '100px 0', position: 'relative' }}>
            <div className="container">
                {title && (
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{
                            fontSize: '48px',
                            marginBottom: '60px',
                            textAlign: 'center',
                            letterSpacing: '-1px'
                        }}
                    >
                        {title}
                    </motion.h2>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
