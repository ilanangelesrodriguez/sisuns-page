import { useState } from 'react'
import './App.css'
import { Route, Routes} from 'react-router-dom';
import {Footer} from "./components/footer/Footer.tsx";
import {Header} from "./components/header/Header.tsx";
import {MainContent} from "./components/mainContent/MainContent.tsx";
import {LoginPage} from "./pages/login/LoginPage.tsx";
import {NotFound} from "./pages/error/NotFound.tsx";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/login" element={<LoginPage />} />
                {/* Agrega una ruta para el componente NotFound */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
