import {Header} from "./home/header/Header";
import {Footer} from "./home/footer/Footer";
import {IHeaderProps} from "../models/interfaces";

export function Layout({ children, darkMode, toggleDarkMode, showFullHeader, showFooter, showHeader }: IHeaderProps) {
    return (
        <>
            {showHeader && <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} showFullHeader={showFullHeader} />}
            {children}
            {showFooter && <Footer />}
        </>
    );
}