import styles from "./Main.module.css";
import research from "../../../assets/research.png";
import {useNavigate} from "react-router-dom";

export function Main() {
    const navigate = useNavigate();

    const handleContact = () => {
        navigate('/contact');
    }

    return (
        <section className={styles.homeSection}>
            <div className={styles.homeSectionDescription}>
                <p className={styles.homeSectionDescriptionLabel}>
                    Semillero de investigación
                </p>
                <h1 className={styles.homeSectionDescriptionH1}>
                    Construyendo el futuro a través de la investigación
                </h1>
                <p>
                    Únete a nuestro semillero de ingeniería de sistemas y sé parte de un equipo apasionado por crear
                    soluciones innovadoras para los desafíos del mundo actual.
                </p>
                <button className={styles.contactButton} onClick={handleContact}>
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
    );
}