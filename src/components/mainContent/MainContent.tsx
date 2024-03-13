import { About } from './subcomponents/about/About.tsx';
import { Services } from './subcomponents/services/Services.tsx';
import research from "../../assets/research.svg";
import styles from "./MainContent.module.css";
import {Contact} from "./subcomponents/contact/Contact.tsx";

export function MainContent() {
    return (
        <main className={styles.main}>
            <section className={styles.mainSection}>
                <div className={styles.mainSectionDescription}>
                    <p className={styles.mainSectionDescriptionLabel}>Semillero de investigación</p>
                    <h1 className={styles.mainSectionDescriptionH1}>Construyendo el futuro a través de la
                        investigación.</h1>
                    <p>Únete a nuestro semillero de ingeniería de sistemas y sé parte de un equipo apasionado por crear
                        soluciones innovadoras para los desafíos del mundo actual.</p>

                    <button className={styles.contactButton}>
                        Únete Ahora
                        <div className={styles.iconButton}>
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                    </button>

                </div>
                <div>
                    <img src={research} className={styles.imgResearch} alt={"Research"}/>
                </div>
            </section>

            <About/>
            <Services/>
            <Contact/>
        </main>
    );
}