import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.copyright}>
                    © {new Date().getFullYear()} Viralix. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
