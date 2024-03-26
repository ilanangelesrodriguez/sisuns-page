import {IUser} from "./IUser";

export interface IAuthContext {
    isAuthenticated: boolean;
    login: (user: IUser) => void;
    logout: () => void;
    user: IUser | null;
}