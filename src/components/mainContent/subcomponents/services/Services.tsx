import styles from './Services.module.css';

export function Services() {
    return (
        <div className={styles.card}>
            <h2>Servicios</h2>
            <div>
                <p>
                    El Semillero de Investigación de la Universidad Nacional del Santa (SISUNS) ofrece una variedad de servicios para estudiantes, profesionales y la comunidad en general. Nuestro objetivo es promover la investigación y la innovación en el campo de la ingeniería de sistemas e informática. Algunos de nuestros servicios incluyen:
                </p>
            </div>
            <div>
                <ul>
                    <li>Asesoría en proyectos de investigación.</li>
                    <li>Capacitaciones y talleres en temas de tecnología y desarrollo de software.</li>
                    <li>Desarrollo de soluciones tecnológicas innovadoras.</li>
                    <li>Participación en proyectos de investigación aplicada.</li>
                    <li>Colaboración con la industria en proyectos de innovación y desarrollo tecnológico.</li>
                </ul>
            </div>
            <div>
                <p>
                    Nuestros servicios están diseñados para apoyar el crecimiento y la formación de profesionales en el campo de la ingeniería de sistemas e informática. Buscamos promover la investigación, el desarrollo tecnológico y la innovación en nuestra comunidad universitaria y más allá.
                </p>
            </div>

        </div>
    );
}