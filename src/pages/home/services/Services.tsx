import styles from './Services.module.css';
import commitment from '../../../assets/commitment.svg';

export function Services() {
    return (
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>Servicios</h2>
            <div className={styles.cardSection}>
                <h3 className={styles.sectionTitle}>Nuestros Servicios</h3>
                <ul className={styles.serviceList}>
                    <li className={styles.serviceItem}>
                        <span className={styles.serviceNumber}>1</span>
                        Capacitaciones y talleres en temas de tecnología y desarrollo de software.
                    </li>
                    <li className={styles.serviceItem}>
                        <span className={styles.serviceNumber}>2</span>
                        Desarrollo de soluciones tecnológicas innovadoras.
                    </li>
                    <li className={styles.serviceItem}>
                        <span className={styles.serviceNumber}>3</span>
                        Participación en proyectos de investigación aplicada.
                    </li>
                    <li className={styles.serviceItem}>
                        <span className={styles.serviceNumber}>4</span>
                        Colaboración con la industria en proyectos de innovación y desarrollo tecnológico.
                    </li>
                </ul>
            </div>
            <div className={`${styles.cardSection} ${styles.cardSectionCommit}`}>
                <div className={styles.cardImageDiv} >
                    <img className={styles.cardImage} src={commitment} alt="Servicios"/>
                </div>
                <div className={styles.cardSectionCommitDiv}>
                    <h3 className={styles.sectionTitle}>Nuestro Compromiso</h3>
                    <p>
                        Nuestros servicios están diseñados para apoyar el crecimiento y la formación de profesionales en
                        el campo de la ingeniería de sistemas e informática. Buscamos promover la investigación, el
                        desarrollo tecnológico y la innovación en nuestra comunidad universitaria y más allá.
                    </p>
                </div>

            </div>
        </div>
    );
}