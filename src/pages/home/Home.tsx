import {useEffect, useState} from "react";
import {Loader} from "../../components/loader/Loader";
import {About} from "./about/About";
import {Services} from "./services/Services";
import styles from "./Home.module.css";
import {Main} from "./main/Main";
import {Contact} from "./contact/Contact";

export function Home() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1000);
        return () => clearTimeout(timer);

    }, [isLoaded]);

    return (
        isLoaded ? (
            <main className={styles.mainContent}>
                <Main />
                <About />
                <Services />
                <Contact />
            </main>
        ) : (
            <Loader />
        )
    );
}