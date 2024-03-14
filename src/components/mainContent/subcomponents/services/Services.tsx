import styles from './Services.module.css';

export function Services() {
    return (
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>Servicios</h2>
            <div className={styles.cardSection}>
                <h3 className={styles.sectionTitle}>Nuestros Servicios</h3>
                <ul className={styles.serviceList}>
                    <li className={styles.serviceItem}>Asesoría en proyectos de investigación.</li>
                    <li className={styles.serviceItem}>Capacitaciones y talleres en temas de tecnología y desarrollo de
                        software.
                    </li>
                    <li className={styles.serviceItem}>Desarrollo de soluciones tecnológicas innovadoras.</li>
                    <li className={styles.serviceItem}>Participación en proyectos de investigación aplicada.</li>
                    <li className={styles.serviceItem}>Colaboración con la industria en proyectos de innovación y
                        desarrollo tecnológico.
                    </li>
                </ul>
            </div>
            <div className={styles.cardSection}>
                <h3 className={styles.sectionTitle}>Nuestro Compromiso</h3>
                <p>
                    Nuestros servicios están diseñados para apoyar el crecimiento y la formación de profesionales en el
                    campo de la ingeniería de sistemas e informática. Buscamos promover la investigación, el desarrollo
                    tecnológico y la innovación en nuestra comunidad universitaria y más allá.
                </p>
            </div>
        </div>
    );
}