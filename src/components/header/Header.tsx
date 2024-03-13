import { Link } from 'react-router-dom';
import './Header.module.css';
import styles from './Header.module.css';
import sisunsLogo from '/sisuns.svg';

interface HeaderProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

export function Header({darkMode, toggleDarkMode}: HeaderProps) {
  return (
      <header>
          <nav>
              <ul>
                  <div className={styles.headerDiv}>
                      <li>
                          <Link to="/" className={styles.headerLogoLink}>
                              <img className={styles.headerLogo} src={sisunsLogo} alt="SISUNS Logo"/>
                              <h1 className={styles.headerLogoH1}>
                                  SIS<span className={styles.headerLogoSpan}>UNS</span>
                              </h1>
                          </Link>
                      </li>
                  </div>

                  <div className={styles.headerDiv}>
                      <li><Link to="/">Inicio</Link></li>
                      <li><Link to="/about">Sobre Nosotros</Link></li>
                      <li><Link to="/contact">Contacto</Link></li>
                      <li><Link to="/login">Login</Link></li>
                      <li>
                          <label className={styles.switch} htmlFor="switch">
                              <input id="switch" className={styles.circle} type="checkbox" checked={darkMode}
                                     onChange={toggleDarkMode}/>
                              <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"
                                   className={`${styles.moon} ${styles['svg']}`}>
                                  <path
                                      d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                              </svg>
                              <div className={`${styles.sun} ${styles['svg']}`}>
                                  <span className={styles.dot}></span>
                              </div>
                          </label>
                      </li>
                  </div>

              </ul>
          </nav>
      </header>
  )
}