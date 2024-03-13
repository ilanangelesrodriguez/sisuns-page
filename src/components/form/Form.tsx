import styles from './Form.module.css';

export function Form() {
    return (
        <>
            <form className={styles.form}>
                <div className={styles.header}>Formulario de contacto</div>
                <div className={styles.inputs}>
                    <input placeholder="Nombres" className={styles.input} type="text"/>
                    <input placeholder="Apellidos" className={styles.input} type="text"/>
                    <input placeholder="Correo Electrónico" className={styles.input} type="text"/>
                    <input placeholder="Describe tu caso" className={styles.input} type="text"/>

                    <button className={styles.siginBtn}>
                        Enviar
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
            </form>
        </>
    )
}