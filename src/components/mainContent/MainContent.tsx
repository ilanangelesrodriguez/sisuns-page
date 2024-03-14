import { About } from './subcomponents/about/About.tsx';
import { Services } from './subcomponents/services/Services.tsx';
import styles from "./MainContent.module.css";
import {Contact} from "./subcomponents/contact/Contact.tsx";
import {Home} from "./subcomponents/home/Home.tsx";

export function MainContent() {
    return (
        <main className={styles.main}>
            <Home />
            <About/>
            <Services/>
            <Contact/>
        </main>
    );
}