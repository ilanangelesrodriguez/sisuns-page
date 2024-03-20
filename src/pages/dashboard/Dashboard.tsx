import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css';
import {useAuth} from "../../hooks/useAuth";
import {DFooter} from "../../components/dashboard/DFooter";
import {DHeader} from "../../components/dashboard/header/DHeader";
import {IHeaderProps} from "../../models/IHeaderProps";
import {UserEditForm} from "../../components/dashboard/UserEditForm";
import {UserDeleteForm} from "../../components/dashboard/UserDeleteForm";
import {UserCreateForm} from "../../components/dashboard/UserCreateForm";
import {UserTable} from "../../components/dashboard/UserTable";



export function Dashboard({ darkMode, toggleDarkMode, showFullHeader}: IHeaderProps) {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();


    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === 'isAuthenticated' && event.newValue === 'false') {
                navigate('/login');
            }
        };
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [navigate]);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);



    return (
        <>
            <DHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} showFullHeader={showFullHeader} />
            <div className={styles.dashboard}>
                <h1>Dashboard</h1>
                <UserTable />
                <UserEditForm  />
                <UserDeleteForm />
                <UserCreateForm />
            </div>
            <DFooter />
        </>
    )
}