import { useState } from 'react';
import styles from './Form.module.css';

export function Form() {
    const [showForm, setShowForm] = useState(true);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (firstName && lastName && email && description) {
            setShowForm(false);
            setErrorMessage("");
        } else {
            setErrorMessage("Por favor, complete todos los campos");
        }
    }

    const handleBack = () => {
        setShowForm(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setDescription("");
    }

    return (
        <>
            {showForm ? (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.header}>Formulario de contacto</div>
                    <div className={styles.inputs}>
                        <input placeholder="Nombres" className={styles.input} type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        <input placeholder="Apellidos" className={styles.input} type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        <input placeholder="Correo Electrónico" className={styles.input} type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input placeholder="Describe tu caso" className={styles.input} type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                        <button className={styles.siginBtn} type="submit">
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
                        {errorMessage && <p>{errorMessage}</p>}
                    </div>
                </form>
            ) : (
                <div>
                    <p>Hola {firstName}, esta sección se encuentra en desarrollo</p>
                    <button onClick={handleBack}>Volver al formulario</button>
                </div>
            )}
        </>
    )
}