import {useEffect, useState} from "react";
import {Loader} from "../../components/loader/Loader";
import {About} from "./about/About";
import {Services} from "./services/Services";
import styles from "./Home.module.css";
import {Main} from "./main/Main";

export function Home() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1200);
        return () => clearTimeout(timer);

    }, [isLoaded]);

    return (
        isLoaded ? (
            <main className={styles.mainContent}>
                <Main />
                <About />
                <Services />
            </main>
        ) : (
            <Loader />
        )
    );
}