import { useState } from 'react'
import './App.css'
import {Navigate, Route, Routes} from 'react-router-dom';
import {Footer} from "./components/footer/Footer.tsx";
import {Header} from "./components/header/Header.tsx";
import {MainContent} from "./components/mainContent/MainContent.tsx";
import {LoginPage} from "./pages/login/LoginPage.tsx";

function App() {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

  return (
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
          <Routes>
              <Route path="/" element={<MainContent/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              {/* Redirigir rutas no encontradas a la página de inicio */}
              <Route path="*" element={<Navigate to="/" replace/>}/>
          </Routes>
          <Footer/>
      </div>
  )
}

export default App
