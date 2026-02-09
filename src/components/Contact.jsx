import Section from './Section';
import { Mail, User, FileText, Linkedin, GraduationCap, Github } from 'lucide-react';

const Contact = () => {
    return (
        <Section id="contact" title="Get in Touch">
            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                background: 'var(--card-bg)',
                borderRadius: '24px',
                padding: '40px',
                border: '1px solid var(--glass-border)'
            }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>

                    <form action="https://formspree.io/f/xbjnlael" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div style={{ position: 'relative' }}>
                            <User size={18} style={{ position: 'absolute', top: '12px', left: '12px', color: 'var(--text-secondary)' }} />
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                                style={{
                                    width: '100%',
                                    padding: '12px 12px 12px 40px',
                                    borderRadius: '12px',
                                    border: '1px solid var(--glass-border)',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'var(--text-primary)',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        <div style={{ position: 'relative' }}>
                            <Mail size={18} style={{ position: 'absolute', top: '12px', left: '12px', color: 'var(--text-secondary)' }} />
                            <input
                                type="email"
                                name="_replyto"
                                placeholder="Email"
                                required
                                style={{
                                    width: '100%',
                                    padding: '12px 12px 12px 40px',
                                    borderRadius: '12px',
                                    border: '1px solid var(--glass-border)',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'var(--text-primary)',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        <div style={{ position: 'relative' }}>
                            <FileText size={18} style={{ position: 'absolute', top: '12px', left: '12px', color: 'var(--text-secondary)' }} />
                            <input
                                type="text"
                                name="Subject"
                                placeholder="Subject"
                                required
                                style={{
                                    width: '100%',
                                    padding: '12px 12px 12px 40px',
                                    borderRadius: '12px',
                                    border: '1px solid var(--glass-border)',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'var(--text-primary)',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        <textarea
                            name="message"
                            placeholder="Your Message..."
                            required
                            rows={4}
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '12px',
                                border: '1px solid var(--glass-border)',
                                background: 'rgba(255,255,255,0.05)',
                                color: 'var(--text-primary)',
                                outline: 'none',
                                resize: 'none'
                            }}
                        ></textarea>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ width: '100%', marginTop: '10px' }}
                        >
                            Send Message
                        </button>
                    </form>

                    <div style={{ padding: '20px', color: 'var(--text-secondary)' }}>
                        <h4 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>Contact Info</h4>
                        <p style={{ marginBottom: '20px' }}>shreyaskamathkm@gmail.com</p>

                        <h4 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>Socials</h4>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <a href="https://www.linkedin.com/in/shreyaskamath/" className="btn btn-secondary" style={{ padding: '10px' }} title="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://scholar.google.com/citations?user=dMTASX8AAAAJ&hl=en" className="btn btn-secondary" style={{ padding: '10px' }} title="Google Scholar">
                                <GraduationCap size={20} />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </Section>
    );
};

export default Contact;
