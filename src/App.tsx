import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import {MainContent} from "./components/mainContent/MainContent.tsx";
import {LoginPage} from "./pages/login/LoginPage.tsx";
import {Dashboard} from "./pages/dashboard/Dashboard.tsx";
import {NotFound} from "./pages/error/NotFound.tsx";
import {Layout} from "./components/Layout.tsx";
import {AuthProvider} from "./pages/login/auth/AuthContext.tsx";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <AuthProvider>
            <div className={darkMode ? 'dark-mode' : 'light-mode'}>
                <Routes>
                    <Route path="/" element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}><MainContent /></Layout>} />
                    <Route path="/login" element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}><LoginPage /></Layout>} />
                    <Route path="*" element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}><NotFound /></Layout>} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </AuthProvider>
    );
}

export default App;