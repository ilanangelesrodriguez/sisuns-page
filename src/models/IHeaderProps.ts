import {ReactNode} from "react";

export interface IHeaderProps {
    children?: ReactNode;
    darkMode: boolean;
    toggleDarkMode: () => void;
    showFullHeader: boolean;
    showFooter?: boolean;
    showHeader?: boolean;
}