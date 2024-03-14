import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css';
import {useAuth} from "../login/auth/AuthContext.tsx";

export function Dashboard() {
    const navigate = useNavigate();
    const { logout, isAuthenticated } = useAuth();

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

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className={styles.dashboard}>
            <header className={styles.header}>
                <button onClick={handleLogout}>Cerrar sesión</button>
            </header>
            <h1>Dashboard</h1>
        </div>
    )
}