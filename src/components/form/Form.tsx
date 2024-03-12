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
                    <textarea placeholder="Describe tu caso" className={styles.input} name="" id="" cols={10} rows={2}></textarea>
                    <button className={styles.siginBtn}>Enviar</button>
                </div>
            </form>
        </>
    )
}