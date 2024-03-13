import { About } from './subcomponents/About.tsx';
import { Services } from './subcomponents/Services.tsx';
import research from "../../assets/research.svg";
import styles from "./MainContent.module.css";
import {Contact} from "./subcomponents/contact/Contact.tsx";

export function MainContent() {
    return (
        <main className={styles.main}>
            <section className={styles.mainSection}>
                <div className={styles.mainSectionDescription}>
                    <p className={styles.mainSectionDescriptionLabel}>Semillero de investigación</p>
                    <h1 className={styles.mainSectionDescriptionH1}>Construyendo el futuro a través de la investigación.</h1>
                    <p>Únete a nuestro semillero de ingeniería de sistemas y sé parte de un equipo apasionado por crear soluciones innovadoras para los desafíos del mundo actual.</p>
                    <button>Únete Ahora</button>
                </div>
                <div>
                    <img src={research} className={styles.imgResearch} alt={"Research"}/>
                </div>
            </section>

            <About/>
            <Services/>
            <Contact />
        </main>
    );
}