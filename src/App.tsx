import {ReactNode, useState} from 'react'
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

    const renderLayout = (path: string, children: ReactNode, showFooter=true, showHeader=true) => {
        return (
            <Route path={path} element={
                <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} showFooter={showFooter} showHeader={showHeader} showFullHeader={true}>
                    {children}
                </Layout>
            } />
        );
    };

    return (
        <AuthProvider>
            <div className={darkMode ? 'light-mode' : 'dark-mode'}>
                <Routes>
                    {renderLayout("/", <MainContent />)}
                    {renderLayout("/login", <LoginPage />)}
                    {renderLayout("*", <NotFound />)}
                    {renderLayout("/dashboard", <Dashboard darkMode={darkMode} toggleDarkMode={toggleDarkMode} showFullHeader={false} />, false, false)}
                </Routes>
            </div>
        </AuthProvider>
    );
}

export default App;