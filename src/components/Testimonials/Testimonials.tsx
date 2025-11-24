import styles from './Testimonials.module.css';
import { User } from 'lucide-react';
import testimonials from '../../config/testimonials.json';

export default function Testimonials() {
    return (
        <section className={styles.section}>

            <div className={styles.header}>
                <span className={styles.subtitle}>TESTIMONIOS</span>
                <h2 className={styles.title}>Lo que dicen nuestros clientes</h2>
            </div>

            <div className={styles.grid}>
                {testimonials.map((item) => (
                    <div key={item.id} className={styles.card}>

                        <div className={styles.avatarContainer}>
                            {item.avatar ? (
                                <img src={item.avatar} alt={item.name} className={styles.avatar} />
                            ) : (
                                <User size={60} color="#9ca3af" />
                            )}
                        </div>

                        <div className={styles.cardContent}>
                            <span className={styles.quoteIcon}>“</span>
                            <p className={styles.text}>{item.text}</p>
                            <h4 className={styles.name}>{item.name}</h4>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}
