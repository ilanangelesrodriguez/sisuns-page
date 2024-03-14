import styles from './About.module.css';
import dataResearch from '../../../../assets/data-research.svg';

export function About() {
    return (
        <div className={styles.card}>
            <section className={styles.aboutSection}>
                <h2 className={styles.aboutTitle}>Acerca de Nosotros</h2>

                <div className={styles.aboutSectionDiv}>
                    <div className={styles.aboutSectionContent}>
                        <p className={styles.aboutDescription}>
                            El Semillero de Investigación de la Universidad Nacional del Santa (SISUNS) es un semillero
                            de talento, una incubadora de ideas, conformado por estudiantes de la carrera profesional
                            de Ingeniería de Sistemas e Informática.
                        </p>
                        <p className={styles.aboutMission}>
                            Nuestra misión es impulsar el
                            desarrollo tecnológico y fomentar el avance del conocimiento, no solo en nuestra comunidad
                            universitaria, sino también más allá de sus fronteras.
                        </p>
                        <address className={styles.aboutAddress}>
                            <div className={styles.addressItem}>
                                <svg className={styles.addressIcon} xmlns="http://www.w3.org/2000/svg" width="50"
                                     height="50"
                                     viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                       strokeWidth="2">
                                        <path d="M22 9L12 5L2 9l10 4l10-4v6"/>
                                        <path d="M6 10.6V16a6 3 0 0 0 12 0v-5.4"/>
                                    </g>
                                </svg>
                                Ingeniería de Sistemas e Informática
                            </div>
                            <div className={styles.addressItem}>
                                <svg className={styles.addressIcon} xmlns="http://www.w3.org/2000/svg" width="50"
                                     height="50"
                                     viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                          d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26.158 26.158 0 0 0 12 20.758a26.14 26.14 0 0 0 3.262-2.994C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7Zm0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053a25.34 25.34 0 0 1-1.214-.94a28.157 28.157 0 0 1-2.853-2.698C5.218 16.876 3 13.637 3 10a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28.145 28.145 0 0 1-3.796 3.44a16.794 16.794 0 0 1-.345.251l-.021.014l-.006.005l-.002.001l-.568.39ZM12 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0Z"/>
                                </svg>
                                Nuevo Chimbote, Áncash, Perú
                            </div>
                        </address>
                    </div>

                    <div>
                        <img src={dataResearch}
                             alt="Data Research" className={styles.imgAbout}/>
                    </div>
                </div>


            </section>

            <section className={styles.sectionCards}>
                <div className={styles.cardItem}>
                    <h3 className={styles.cardTitle}>Promoviendo la Investigación</h3>
                    <p>Nos dedicamos a impulsar la investigación en ingeniería de sistemas e informática.</p>
                </div>
                <div className={styles.cardItem}>
                    <h3 className={styles.cardTitle}>Desarrollando Habilidades</h3>
                    <p>Buscamos desarrollar habilidades investigativas y avanzar en tecnología de la información y
                        comunicación.</p>
                </div>
                <div className={styles.cardItem}>
                    <h3 className={styles.cardTitle}>Colaboración y Soluciones Innovadoras</h3>
                    <p>Colaboramos con profesionales para abordar desafíos tecnológicos y encontrar soluciones
                        innovadoras.</p>
                </div>
                <div className={styles.cardItem}>
                    <h3 className={styles.cardTitle}>Pasión por la Investigación</h3>
                    <p>Nuestra pasión nos impulsa a explorar nuevas ideas para resolver problemas del mundo real.</p>
                </div>
            </section>

            <section className={styles.sectionHighlight}>
                <h3 className={styles.highlightTitle}>Proyectos Innovadores</h3>
                <p>Trabajamos en proyectos innovadores, colaborativos y multidisciplinarios que buscan resolver
                    problemas y generar impacto en la sociedad.</p>

                <h3 className={styles.highlightTitle}>Creemos en la Tecnología</h3>
                <p>Creemos en el poder transformador de la tecnología y nos esforzamos por utilizar nuestros
                    conocimientos y habilidades para crear un futuro mejor.</p>

                <h3 className={styles.highlightTitle}>Construyendo un Mundo Mejor</h3>
                <p>Nuestro equipo está dedicado a construir un mundo más innovador, inclusivo y sostenible a través de
                    la ingeniería y la investigación.</p>
            </section>
        </div>
    );
}