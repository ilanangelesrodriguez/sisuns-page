import {IUser} from "../../../models/IUser";

export interface MainContentProps {
    selectedOption?: string | null;
    user: IUser | null;
}
