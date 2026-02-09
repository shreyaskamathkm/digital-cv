import Section from './Section';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
    {
        degree: "Ph.D. in Electrical and Computer Engineering",
        school: "Tufts University",
        schoolLink: "https://www.tufts.edu/",
        year: "Feb 2022",
        thesis: "Dissertation: Advancing Multimodal Data through Artificial Intelligence Technologies with Applications to Biometrics and Nutrition Science",
        advisor: "Dr. Karen Panetta",
        advisorLink: "https://www.karenpanetta.com/#about-overview"
    },
    {
        degree: "M.S. in Electrical and Computer Engineering",
        school: "The University of Texas at San Antonio",
        schoolLink: "https://www.utsa.edu/",
        year: "May 2016",
        thesis: "Thesis: Fingerprint Image Quality Assessment, Verification, and Detection",
        advisor: "Dr. Sos S Agaian",
        advisorLink: "https://www.csi.cuny.edu/campus-directory/sos-agaian"
    }
];

const experience = [
    {
        company: "SimpliSafe, Inc.",
        companyLink: "https://simplisafe.com/",
        location: "Boston, MA",
        role: "Senior Machine Learning Engineer",
        period: "June 2025 – Present",
        details: [
            "Enabled SigLIP 2 and CLIP training by producing 400k curated text-image pairs via an Agentic AI-based prompt-generation workflow built with Strands SDK to drive the Amazon Nova model",
            "Owned the end-to-end development of a from-scratch object detection system, enabling distributed DDP training with PyTorch Lightning and Ray, significantly improving training scalability and throughput"
        ]
    },
    {
        company: "SimpliSafe, Inc.",
        companyLink: "https://simplisafe.com/",
        role: "Machine Learning Engineer – II",
        period: "July 2023 – June 2025",
        details: [
            "Developed a POC for a semantic search system using foundational models (CLIP and SigLIP 2) to enable users to identify unique scenarios and receive custom notifications",
            "Reduced false positives in motion alerts by 90% by designing and implementing optimized frame-difference algorithms, enhancing user experience and system reliability",
            "Achieved a 35% increase in event filtering accuracy by developing and releasing a new object detection model on cloud",
            "Automated key frame detection, cutting manual review time by 40%, by architecting a smart sampling system that streamlined video processing workflows",
            "Accelerated AI model deployment by 30% by leveraging Voxel51 tool-based model evaluation, enabling real-time data-driven decisions for senior leadership",
            "Strengthened team expertise by assessing and recruiting top-tier VLM-focused scientists, enabling the scaling of AI-driven solutions and advancing the organization’s VLM capabilities"
        ]
    },
    {
        company: "SimpliSafe, Inc.",
        companyLink: "https://simplisafe.com/",
        role: "Computer Vision Engineer – I",
        period: "January 2022 – July 2023",
        details: [
            "Enhanced person and pet detection accuracy by 5% (mAP) on edge devices through advanced augmentation and hyperparameter tuning in PyTorch",
            "Reduced model memory usage by 50% and inference latency with 0.8% mAP drop, applying model quantization and compression for edge deployment using PyTorch, ONNX, and NNI",
            "Designed region-of-interest-aware YOLO models in PyTorch that improved edge model performance by 11%, leading to Patent No. US11,922,669",
            "Boosted test coverage by 60% by automating unit tests with pytest and unittest, streamlining QA processes",
            "Accelerated AI development by refactoring Python and PyTorch codebases with a Test-Driven Development approach, improving code quality and maintainability"
        ]
    },
    {
        company: "American Science and Engineering",
        companyLink: "https://www.rapiscan-ase.com/",
        location: "Billerica, MA",
        role: "Computer Vision & Deep Learning Intern",
        period: "May 2019 – August 2019",
        details: [
            "Improved contraband detection in X-ray scans by 5% by developing a Mask-RCNN model using Keras and TensorFlow, enhancing system accuracy and reliability",
            "Increased dataset diversity by 40% and reduced overfitting by developing a Conditional GAN to generate synthetic contraband images, improving model robustness and accuracy",
            "Accelerated development time by 30% by building visualization tools to simplify CNN debugging and improve model interpretability"
        ]
    },
    {
        company: "Tufts University",
        location: "Medford, MA",
        role: "Graduate Research Assistant",
        period: "September 2016 – December 2021",
        details: [
            "Focused on conducting research in computer vision, image processing, and artificial intelligence for developing applications to solve complex problems faced in multimedia, healthcare, dental, and biometric industries",
            "Secured over $419K in grant funding from NIH – (1R21CA250024) to develop an AI-based dietary composition assessment system",
            "Secured over $10K in grant funding from Tufts Institute for Global Obesity Research 2019",
            "Performed classification of benign and malignant tumors by utilizing XGBoost algorithm with 90% accuracy at ISIC 2019 challenge",
            "Developed a CNN-based system to recognize thermal face emotions with 96.2% accuracy",
            "Designed a novel CNN model to perform single image exposure correction by synthesizing multiple exposures",
            "Implemented a Quaternion CNN framework for super-resolution matching SOTA metrics with 4x lower parameters"
        ]
    },
    {
        company: "The University of Texas at San Antonio",
        location: "San Antonio, TX",
        role: "Graduate Research Assistant",
        period: "October 2015 – February 2016",
        details: [
            "Focused on research in 3-D and 2-D image processing space to alleviate problems faced in the biometric industry",
            "Developed a feedback-based algorithm to enhance fingerprint images by utilizing a novel quality measure",
            "Performed fingerprint classification using handcrafted fingerprint features achieving 86.2% accuracy"
        ]
    }
];

const Experience = () => {
    return (
        <>
            <Section id="work-experience" title="Experience" layout="side-by-side">
                <div className="experience-list">
                    {experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            style={{ marginBottom: '40px' }}
                        >
                            <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '4px' }}>{job.role}</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                                {job.companyLink ? (
                                    <a
                                        href={job.companyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: 'var(--accent-blue)', fontWeight: 500, textDecoration: 'none' }}
                                        onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                                        onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                                    >
                                        {job.company}
                                    </a>
                                ) : (
                                    <span style={{ color: 'var(--accent-blue)', fontWeight: 500 }}>{job.company}</span>
                                )}
                                <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{job.period}</span>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {job.details.map((point, i) => (
                                    <li key={i} style={{
                                        marginBottom: '8px',
                                        color: 'var(--text-secondary)',
                                        fontSize: '15px',
                                        paddingLeft: '16px',
                                        position: 'relative'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: 0,
                                            top: '8px',
                                            width: '6px',
                                            height: '6px',
                                            borderRadius: '50%',
                                            background: 'var(--accent-purple)'
                                        }}></span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <Section id="education" title="Education" layout="side-by-side">
                <div className="education-list">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            style={{ marginBottom: '32px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}
                        >
                            <div style={{ flexShrink: 0, width: '60px', height: '60px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--glass-border)' }}>
                                <GraduationCap size={32} color="var(--accent-blue)" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '4px' }}>{edu.degree}</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '10px' }}>
                                    <a
                                        href={edu.schoolLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: 'var(--accent-blue)', fontWeight: 500, textDecoration: 'none' }}
                                        onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                                        onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                                    >
                                        {edu.school}
                                    </a>
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{edu.year}</span>
                                </div>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6', marginBottom: '4px' }}>{edu.thesis}</p>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
                                    Advisor: <a
                                        href={edu.advisorLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: 'var(--text-primary)', textDecoration: 'none', borderBottom: '1px dotted var(--text-secondary)' }}
                                    >
                                        {edu.advisor}
                                    </a>
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </>
    );
};

export default Experience;
