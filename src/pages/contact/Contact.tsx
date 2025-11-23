import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Mail, Phone, MapPin, Send, X, Instagram, Facebook } from 'lucide-react';
import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
    const heroReveal = useScrollReveal<HTMLElement>({ threshold: 0.2 });
    const formReveal = useScrollReveal<HTMLElement>({ threshold: 0.1 });
    const infoReveal = useScrollReveal<HTMLElement>({ threshold: 0.1 });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        //enviar datos de formulario por whatsapp
        //const whatsappUrl = `https://wa.me/5213312556655?text=Nombre: ${formData.name}%0AEmail: ${formData.email}%0ATeléfono: ${formData.phone}%0AMensaje: ${formData.message}`;
        //window.open(whatsappUrl, '_blank');

        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <main className="container">
            <section
                ref={heroReveal.ref}
                className={`${styles.hero} ${heroReveal.isVisible ? styles.visible : ''}`}
            >
                <h1 className={styles.title}>Contáctanos</h1>
                <p className={styles.subtitle}>
                    ¿Listo para llevar tu restaurante al siguiente nivel? ¡Hablemos!
                </p>
            </section>

            <div className={styles.contentWrapper}>
                <section
                    ref={formReveal.ref}
                    className={`${styles.formSection} ${formReveal.isVisible ? styles.visible : ''}`}
                >
                    <h2 className={styles.sectionTitle}>Envíanos un Mensaje</h2>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Nombre Completo</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={styles.input}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.input}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="phone" className={styles.label}>Teléfono</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={styles.textarea}
                                rows={5}
                                required
                            />
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            <Send size={18} />
                            <span>Enviar Mensaje</span>
                        </button>
                    </form>
                </section>

                <section
                    ref={infoReveal.ref}
                    className={`${styles.infoSection} ${infoReveal.isVisible ? styles.visible : ''}`}
                >
                    <h2 className={styles.sectionTitle}>Información de Contacto</h2>

                    <div className={styles.infoCard}>
                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}>
                                <Mail size={24} />
                            </div>
                            <div className={styles.infoContent}>
                                <h3 className={styles.infoTitle}>Email</h3>
                                <a href="mailto:info@viralix.com" className={styles.infoLink}>
                                    info@viralix.com
                                </a>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}>
                                <Phone size={24} />
                            </div>
                            <div className={styles.infoContent}>
                                <h3 className={styles.infoTitle}>Teléfono</h3>
                                <a href="tel:+573001234567" className={styles.infoLink}>
                                    +57 300 123 4567
                                </a>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}>
                                <MapPin size={24} />
                            </div>
                            <div className={styles.infoContent}>
                                <h3 className={styles.infoTitle}>Ubicación</h3>
                                <p className={styles.infoText}>
                                    Barranquilla, Colombia
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.workingHours}>
                        <h3 className={styles.hoursTitle}>Horario de Atención</h3>
                        <p className={styles.hoursText}>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                        <p className={styles.hoursText}>Sábados: 10:00 AM - 2:00 PM</p>
                    </div>

                    <div className={styles.socialLinks}>
                        <h3 className={styles.hoursTitle}>Síguenos en Redes</h3>
                        <div className={styles.socialIcons}>
                            <a
                                href="https://twitter.com/viralix"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                <X size={24} />
                                <span>@viralix</span>
                            </a>
                            <a
                                href="https://instagram.com/viralix"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                <Instagram size={24} />
                                <span>@viralix</span>
                            </a>
                            <a
                                href="https://facebook.com/viralix"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                <Facebook size={24} />
                                <span>@viralix</span>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
