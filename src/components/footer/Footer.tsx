import './Footer.module.css';
import styles from './Footer.module.css';
import {SocialButtons} from "../socialButtons/SocialButtons";
import {Credit} from "./credit/Credit";

export function Footer() {
  return (
      <>
          <footer className={styles.footer}>
              <div className={styles.footerContainer}>
                  <div className={styles.footerRow}>
                      <div className={styles.footerCol}>
                          <h4>Universidad</h4>
                          <ul className={styles.footerList}>
                              <li><a href="">Admisión</a></li>
                              <li><a href="">Pregrado</a></li>
                              <li><a href="">PostGrado</a></li>
                              <li><a href="">Semilleros de Investigación</a></li>
                          </ul>
                          <div>
                              <a href="https://www.uns.edu.pe/#/principal" target="_blank">
                                  <img src="" alt=""/>
                              </a>
                          </div>

                      </div>
                      <div className={styles.footerCol}>
                          <h4>Encuentranos</h4>
                          <p>Av. Pacífico 508 - Nuevo Chimbote</p>
                          <p>Central Telefónica.: (51)-43-310445 Chimbote - Ancash - Perú.</p>

                          <SocialButtons />

                      </div>
                      <div className={styles.footerCol}>
                          <h4>Transparencia</h4>
                          <ul className={styles.footerList}>
                              <li>
                                  <a href="" download="Resolucion_SISUNS_19_10_2023" target="_blank">
                                      <img src="" alt=""/>
                                      Resolución Vicerrectoral: SISUNS
                                  </a>
                              </li>
                              <li>
                                  <a href="" download="Ley-Transparencia" target="_blank">
                                      <img src="" alt=""/>
                                      Ley de Transparencia
                                  </a>
                              </li>
                              <li>
                                  <a href="" download="Ley-Creacion" target="_blank">
                                      <img src="" alt=""/>
                                      Ley de Creación
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <Credit />
          </footer>
      </>
  )
}