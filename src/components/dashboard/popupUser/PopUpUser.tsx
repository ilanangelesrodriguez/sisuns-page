import styles from "./PopUpUser.module.css";
import {PopUpUserProps} from "./PopUpUserProps";

export function PopUpUser({isDropdownVisible, setDropdownVisible}: PopUpUserProps) {
    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    return (
        <div onClick={toggleDropdown}>
            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                <g fill="none" stroke="currentColor">
                    <path d="M7 8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-4.27 3.9a5 5 0 0 1 8.54 0"/>
                    <path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"/>
                </g>
            </svg>
        </div>
    )
}