import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";
import {IHeaderProps} from "../models/IHeaderProps";

export function Layout({ children, darkMode, toggleDarkMode, showFullHeader, showFooter, showHeader }: IHeaderProps) {
    return (
        <>
            {showHeader && <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} showFullHeader={showFullHeader} />}
            {children}
            {showFooter && <Footer />}
        </>
    );
}