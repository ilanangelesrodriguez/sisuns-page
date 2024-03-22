import {Dispatch, SetStateAction} from "react";

export interface PopUpUserProps {
    isDropdownVisible: boolean;
    setDropdownVisible: Dispatch<SetStateAction<boolean>>;
}