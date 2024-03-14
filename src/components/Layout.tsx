import {ReactNode} from "react";
import {Header} from "./header/Header.tsx";
import {Footer} from "./footer/Footer.tsx";

interface LayoutProps {
    children: ReactNode;
    darkMode: boolean;
    toggleDarkMode: () => void;
}

export function Layout({ children, darkMode, toggleDarkMode }: LayoutProps) {
    return (
        <>
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            {children}
            <Footer />
        </>
    );
}