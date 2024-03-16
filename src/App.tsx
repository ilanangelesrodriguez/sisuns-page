import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import {MainContent} from "./components/mainContent/MainContent";
import {LoginPage} from "./pages/login/LoginPage";
import {Dashboard} from "./pages/dashboard/Dashboard";
import {NotFound} from "./pages/error/NotFound";
import {Layout} from "./components/Layout";
import {AuthProvider} from "./pages/login/auth/AuthContext";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <AuthProvider>
            <div className={darkMode ? 'dark-mode' : 'light-mode'}>
                <Routes>
                    <Route path="/" element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} showFullHeader={true}><MainContent /></Layout>} />
                    <Route path="/login" element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} showFullHeader={true}><LoginPage /></Layout>} />
                    <Route path="*" element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} showFullHeader={true}><NotFound /></Layout>} />
                    <Route path="/dashboard" element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} showFullHeader={false}><Dashboard /></Layout>} />
                </Routes>
            </div>
        </AuthProvider>
    );
}

export default App;