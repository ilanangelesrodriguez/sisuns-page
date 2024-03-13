import { useState } from 'react'
import './App.css'
import {Footer} from "./components/footer/Footer.tsx";
import {Header} from "./components/header/Header.tsx";
import {MainContent} from "./components/mainContent/MainContent.tsx";

function App() {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

  return (
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          <MainContent />

          <Footer/>
      </div>
  )
}

export default App
