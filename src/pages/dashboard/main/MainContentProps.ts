import {IUser} from "../../../models/interfaces/IUser";

export interface MainContentProps {
    selectedOption?: string | null;
    user: IUser | null;
}
