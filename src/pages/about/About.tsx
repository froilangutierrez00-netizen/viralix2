import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Target, Users, Zap, Award } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
    const heroReveal = useScrollReveal<HTMLElement>({ threshold: 0.2 });
    const missionReveal = useScrollReveal<HTMLElement>({ threshold: 0.2 });
    const valuesReveal = useScrollReveal<HTMLElement>({ threshold: 0.1 });

    const values = [
        {
            icon: Target,
            title: 'Enfoque en Resultados',
            description: 'Nos comprometemos con el crecimiento real de tu negocio, no solo con métricas vanidosas.'
        },
        {
            icon: Users,
            title: 'Experiencia Especializada',
            description: 'Equipo experto en marketing digital para el sector gastronómico con años de experiencia.'
        },
        {
            icon: Zap,
            title: 'Innovación Constante',
            description: 'Utilizamos las últimas tendencias y tecnologías para mantener tu negocio a la vanguardia.'
        },
        {
            icon: Award,
            title: 'Compromiso Total',
            description: 'Tu éxito es nuestro éxito. Trabajamos como parte de tu equipo para lograr tus objetivos.'
        }
    ];

    return (
        <main className="container">
            <section
                ref={heroReveal.ref}
                className={`${styles.hero} ${heroReveal.isVisible ? styles.visible : ''}`}
            >
                <h1 className={styles.title}>Sobre Viralix</h1>
                <p className={styles.subtitle}>
                    Transformamos restaurantes en marcas exitosas a través del marketing digital
                </p>
            </section>

            <section
                ref={missionReveal.ref}
                className={`${styles.mission} ${missionReveal.isVisible ? styles.visible : ''}`}
            >
                <div className={styles.missionContent}>
                    <h2 className={styles.sectionTitle}>Nuestra Misión</h2>
                    <p className={styles.missionText}>
                        En <strong>Viralix</strong>, nos especializamos en impulsar restaurantes al siguiente nivel
                        mediante estrategias de marketing digital personalizadas y efectivas. Entendemos las
                        particularidades del sector gastronómico y sabemos exactamente cómo conectar tu marca
                        con tus clientes ideales.
                    </p>
                    <p className={styles.missionText}>
                        Combinamos creatividad, análisis de datos y experiencia en el sector para crear
                        campañas que generan resultados tangibles: más reservas, mayor reconocimiento de marca
                        y crecimiento sostenible para tu negocio.
                    </p>
                </div>
            </section>

            <section
                ref={valuesReveal.ref}
                className={`${styles.values} ${valuesReveal.isVisible ? styles.visible : ''}`}
            >
                <h2 className={styles.sectionTitle}>¿Por Qué Elegirnos?</h2>
                <div className={styles.valuesGrid}>
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <div
                                key={index}
                                className={styles.valueCard}
                                style={{ transitionDelay: `${index * 0.1}s` }}
                            >
                                <div className={styles.iconWrapper}>
                                    <Icon size={32} className={styles.icon} />
                                </div>
                                <h3 className={styles.valueTitle}>{value.title}</h3>
                                <p className={styles.valueDescription}>{value.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
