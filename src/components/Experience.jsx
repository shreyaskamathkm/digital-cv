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
        narrative: "At SimpliSafe, I build the AI brain behind home security cameras — designing cloud-based detection models, curating large-scale datasets, and architecting the distributed training pipelines that power computer vision at scale. SimpliSafe protects over 4 million people across the US and UK, and my models are part of the system keeping those homes safe.",
        details: [
            "Reduced inference latency by 50% at comparable mAP by designing a 25M-parameter YOLO model via empirical architecture search, replacing a 99M-parameter production baseline",
            "Eliminated distributional bias across 12M images by formulating a stratified sampling pipeline, reducing training data to 1M balanced samples across camera, temporal, and modal (RGB/NIR) dimensions via Hex and SQL",
            "Architected a distributed YOLO training pipeline from scratch across 6× H100 GPUs, completing 1 epoch on 1.2M images (1M train / 200K val) in 60–65 minutes",
            "Engineered a Ray Data pipeline enriching 12M images with quality metrics, RGB/NIR labels, and image- and object-level embeddings indexed to AWS Athena, enabling stratified sampling and large-scale dataset curation",
            "Synthesized 400K curated text–image pairs via an Agentic AI pipeline (Strands SDK + Amazon Nova), enabling domain-specific SigLIP-2 and CLIP fine-tuning on proprietary SimpliSafe image data"
        ]
    },
    {
        company: "SimpliSafe, Inc.",
        companyLink: "https://simplisafe.com/",
        location: "Boston, MA",
        role: "Computer Vision Engineer – II",
        period: "July 2023 – June 2025",
        narrative: "In this role I focused on making SimpliSafe's AI smarter and more reliable — reducing false motion alerts by 90% so cameras stop triggering on insects and rain, cutting monitoring agent review time by 40%, and building the cloud detection model that reduced operator workload by 35% and generated $1M+ in annual savings. I also designed the Ray Data infrastructure that became the company-wide standard for ML training and data pipelines.",
        details: [
            "Constructed a cloud YOLO detection model on a curated 150K RGB/NIR dataset via a distributed Ray pipeline, reducing monitoring agent event load by 35% and generating $1M+ in annual operator cost savings",
            "Established SimpliSafe's foundational Ray Data infrastructure, enabling distributed ML training and data pipelines across engineering teams and driving company-wide platform adoption",
            "Developed optimized frame-difference algorithms to filter transient edge triggers (insects, rain), eliminating 90% of false positive motion alerts and improving system reliability",
            "Implemented a Voxel51-based model evaluation framework that accelerated AI deployment cycles by 30%, enabling real-time data-driven decisions for senior leadership",
            "Devised a patent-pending keyframe sampling system extracting semantically critical frames from S3-ingested video, improving downstream ML workflows while reducing manual review time by 40%"
        ]
    },
    {
        company: "SimpliSafe, Inc.",
        companyLink: "https://simplisafe.com/",
        location: "Boston, MA",
        role: "Computer Vision Engineer – I",
        period: "January 2022 – July 2023",
        narrative: "In this role I worked on the edge AI models that run directly on SimpliSafe's cameras — making them smarter, faster, and more efficient. By compressing models to half their size and inventing a new region-aware detection architecture (now a granted U.S. patent), I extended camera detection range by 50% and replaced a third-party AI vendor, generating $3.5M in annual cost savings. This work was deployed at national scale across SimpliSafe's camera fleet.",
        details: [
            "Delivered $3.5M in annual cost savings by engineering an in-house edge detection pipeline, replacing a third-party AI vendor and enabling ROI-aware YOLO deployment at national scale via 50% model compression (PyTorch, ONNX)",
            "Invented ROI-aware YOLO architecture extending detection range from 20ft to 30ft+ on edge-constrained hardware, improving performance by 11% and resulting in Patent No. US11,922,669",
            "Optimized person and pet detection by 5% mAP on edge devices via advanced augmentation and hyperparameter tuning in PyTorch",
            "Constructed an automated pytest framework increasing ML model test coverage by 60%, reducing regression risk across production edge releases"
        ]
    },
    {
        company: "American Science and Engineering (Rapiscan)",
        companyLink: "https://www.rapiscan-ase.com/",
        location: "Billerica, MA",
        role: "Computer Vision & Deep Learning Intern",
        period: "May 2019 – August 2019",
        narrative: "My first industry experience applying deep learning to a real-world security problem — building AI models to detect contraband in X-ray scans and using GANs to generate synthetic training data when real examples were scarce.",
        details: [
            "Constructed a Mask R-CNN model in TensorFlow and Keras improving X-ray contraband detection accuracy by 5% on real-world security screening data",
            "Synthesized a 40% larger training dataset via Conditional GAN-generated contraband images, reducing overfitting and improving model generalization under limited data conditions",
            "Accelerated CNN debugging time by 30% by building custom visualization tools to improve model interpretability"
        ]
    },
    {
        company: "Tufts University",
        companyLink: "https://www.tufts.edu/",
        location: "Medford, MA",
        role: "Graduate Research Assistant",
        period: "September 2016 – January 2022",
        narrative: "My PhD at Tufts spanned computer vision, AI for healthcare, and biometrics — funded by $429K+ in competitive grants. I built TDFace (now used by 10,000+ researchers worldwide), developed AI systems for automated nutrition assessment, and published research across thermal imaging, face analysis, image restoration, and medical AI.",
        details: [
            "Biometrics & Face Analysis",
            "Developed TERNet — CNN system for thermal face emotion recognition achieving 96.2% accuracy on Tufts Face Database",
            "Pioneered TDFace — multimodal facial recognition database of 100K+ images across 7 modalities, achieving 10K+ downloads across the global research community",
            "Nutrition & Health AI",
            "Architected the AI pipeline for a $419K NIH R21-funded dietary assessment platform, integrating FTNet (segmentation), DTTNet (depth estimation), and MLP (calorie prediction)",
            "Secured $10K in additional funding from Tufts Institute for Global Obesity Research for RoboRD dietary assessment system",
            "Image Restoration & Enhancement",
            "Designed a novel CNN for single-image exposure correction by synthesizing multiple exposures using a custom loss function",
            "Implemented a Quaternion CNN framework for super-resolution matching SOTA metrics with 4x lower parameters and FLOPs",
            "Segmentation & Detection",
            "Designed a CNN-based segmentation system achieving 2% higher mIoU than SOTA for autonomous driving and nutrition assessment",
            "Classified benign and malignant tumors at ISIC 2019 challenge using a CNN-based ensemble classifier achieving 90% accuracy"
        ]
    },
    {
        company: "The University of Texas at San Antonio",
        companyLink: "https://www.utsa.edu/",
        location: "San Antonio, TX",
        role: "Graduate Research Assistant",
        period: "October 2015 – February 2016",
        narrative: "My master's research at UTSA focused on biometric systems — building algorithms that could enhance, classify, and authenticate fingerprints more accurately than existing methods.",
        details: [
            "Developed a feedback-based fingerprint enhancement algorithm using a novel quality measure for improved biometric accuracy",
            "Performed fingerprint classification using handcrafted features achieving 86.2% accuracy with Support Vector Machines",
            "Implemented a fingerprint authentication system using RANSAC algorithm with SIFT, SURF, and Hessian feature matching"
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
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ marginBottom: '40px' }}
                        >
                            <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '4px' }}>
                                {job.role}
                            </h3>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '8px',
                                flexWrap: 'wrap',
                                gap: '8px'
                            }}>
                                {job.companyLink ? (
                                    <a
                                        href={job.companyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: 'var(--accent-blue)', fontWeight: 500, textDecoration: 'none' }}
                                        onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                                        onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                                    >
                                        {job.company}{job.location ? ` · ${job.location}` : ''}
                                    </a>
                                ) : (
                                    <span style={{ color: 'var(--accent-blue)', fontWeight: 500 }}>
                                        {job.company}{job.location ? ` · ${job.location}` : ''}
                                    </span>
                                )}
                                <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    {job.period}
                                </span>
                            </div>

                            {job.narrative && (
                                <p style={{
                                    fontStyle: 'italic',
                                    color: 'var(--text-secondary)',
                                    fontSize: '15px',
                                    lineHeight: '1.6',
                                    marginBottom: '20px',
                                    paddingLeft: '16px',
                                    borderLeft: '2px solid var(--accent-blue)',
                                    background: 'rgba(41, 151, 255, 0.03)',
                                    paddingTop: '8px',
                                    paddingBottom: '8px'
                                }}>
                                    {job.narrative}
                                </p>
                            )}

                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {job.details.map((point, i) => {
                                    const researchHeaders = [
                                        "Biometrics & Face Analysis",
                                        "Nutrition & Health AI",
                                        "Image Restoration & Enhancement",
                                        "Segmentation & Detection"
                                    ];
                                    const isHeader = researchHeaders.includes(point);
                                    return (
                                        <li key={i} style={{
                                            marginBottom: isHeader ? '12px' : '8px',
                                            marginTop: isHeader && i !== 0 ? '20px' : '0',
                                            color: isHeader ? 'var(--text-primary)' : 'var(--text-secondary)',
                                            fontSize: isHeader ? '16px' : '15px',
                                            fontWeight: isHeader ? 600 : 400,
                                            paddingLeft: isHeader ? '0' : '16px',
                                            position: 'relative',
                                            lineHeight: '1.6'
                                        }}>
                                            {!isHeader && (
                                                <span style={{
                                                    position: 'absolute',
                                                    left: 0,
                                                    top: '10px',
                                                    width: '6px',
                                                    height: '6px',
                                                    borderRadius: '50%',
                                                    background: 'var(--accent-purple)'
                                                }}></span>
                                            )}
                                            {point}
                                        </li>
                                    );
                                })}
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
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                marginBottom: '32px',
                                display: 'flex',
                                gap: '20px',
                                alignItems: 'flex-start'
                            }}
                        >
                            <div style={{
                                flexShrink: 0,
                                width: '60px',
                                height: '60px',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid var(--glass-border)'
                            }}>
                                <GraduationCap size={32} color="var(--accent-blue)" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '4px' }}>
                                    {edu.degree}
                                </h3>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginBottom: '8px',
                                    flexWrap: 'wrap',
                                    gap: '10px'
                                }}>
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
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                                        {edu.year}
                                    </span>
                                </div>
                                <p style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '15px',
                                    lineHeight: '1.6',
                                    marginBottom: '4px'
                                }}>
                                    {edu.thesis}
                                </p>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
                                    Advisor:{' '}
                                    <a
                                        href={edu.advisorLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: 'var(--text-primary)',
                                            textDecoration: 'none',
                                            borderBottom: '1px dotted var(--text-secondary)'
                                        }}
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