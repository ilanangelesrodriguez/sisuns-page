import styles from './ShowPassword.module.css';
import {ShowPasswordProps} from "./ShowPasswordProps";
import {DontShow, Show} from './showPasswordIcon';

export function ShowPassword({ showPassword, toggleShowPassword }: ShowPasswordProps) {
    return (
        <button className={styles.showPasswordButton} type="button" onClick={toggleShowPassword}>
            {showPassword ? <DontShow /> : <Show />}
        </button>
    );
}