import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom';
import {MainContent} from "./components/mainContent/MainContent.tsx";
import {LoginPage} from "./pages/login/LoginPage.tsx";
import {Dashboard} from "./pages/dashboard/Dashboard.tsx";
import {NotFound} from "./pages/error/NotFound.tsx";
import {Layout} from "./components/Layout.tsx";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem('isAuthenticated') === 'true';
    });
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const handleLogin = () => {
            setIsAuthenticated(true);
        };
        window.addEventListener('login', handleLogin);
        return () => {
            window.removeEventListener('login', handleLogin);
        };
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
            <Routes>
                <Route path="/" element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}><MainContent /></Layout>} />
                <Route path="/login" element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}><LoginPage /></Layout>} />
                <Route path="*" element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}><NotFound /></Layout>} />
                <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />} />
            </Routes>
        </div>
    );
}

export default App;