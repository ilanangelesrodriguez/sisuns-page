import { About } from './subcomponents/about/About';
import { Services } from './subcomponents/services/Services';
import styles from "./MainContent.module.css";
import {Contact} from "./subcomponents/contact/Contact";
import {Home} from "./subcomponents/home/Home";
import {useEffect, useState} from "react";
import {Loader} from "../loader/Loader";

export function MainContent() {
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
                <Home />
                <About />
                <Services />
                <Contact />
            </main>
        ) : (
            <Loader />
        )
    );
}