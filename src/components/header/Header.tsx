import { Link } from 'react-router-dom';
import './Header.module.css';
import styles from './Header.module.css';
import sisunsLogo from '/sisuns.svg';
import {ToggleButton} from "../toggleButton/ToggleButton";
import {IHeaderProps} from "../../models/IHeaderProps";


export function Header({darkMode, toggleDarkMode, showFullHeader, children}: IHeaderProps) {
    return (
        <header>
            <nav>
                <ul>
                    <div className={styles.headerDiv}>
                        <li>
                            <Link to={showFullHeader ? "/" : "/dashboard"} className={styles.headerLogoLink}>
                                <img className={styles.headerLogo} src={sisunsLogo} alt="SISUNS Logo"/>
                                <h1 className={styles.headerLogoH1}>
                                    SIS<span className={styles.headerLogoSpan}>UNS</span>
                                </h1>
                            </Link>
                        </li>
                    </div>

                    <div className={styles.headerDiv}>
                        {showFullHeader && (
                            <>
                                <li className={styles.headerItem}>
                                    <Link to="/" className={darkMode ? styles.linkItemDark : styles.linkItem}>Inicio</Link>
                                </li>
                                <li className={styles.headerItem}>
                                    <Link to="/about" className={darkMode ? styles.linkItemDark : styles.linkItem}>Sobre Nosotros</Link>
                                </li>
                                <li className={styles.headerItem}>
                                    <Link to="/contact" className={darkMode ? styles.linkItemDark : styles.linkItem}>Contacto</Link>
                                </li>
                                <li>
                                    <Link to="/login">
                                        <button className={styles.button}>Entrar</button>
                                    </Link>
                                </li>
                            </>
                        )}
                        {children}
                        <li>
                            <ToggleButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}