import {ReactNode} from "react";
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";

interface LayoutProps {
    children: ReactNode;
    darkMode: boolean;
    toggleDarkMode: () => void;
    showFullHeader: boolean;
}

export function Layout({ children, darkMode, toggleDarkMode, showFullHeader}: LayoutProps) {
    return (
        <>
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} showFullHeader={showFullHeader} />
            {children}
            <Footer />
        </>
    );
}