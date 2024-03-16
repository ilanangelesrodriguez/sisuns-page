import { About } from './subcomponents/about/About';
import { Services } from './subcomponents/services/Services';
import styles from "./MainContent.module.css";
import {Contact} from "./subcomponents/contact/Contact";
import {Home} from "./subcomponents/home/Home";

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