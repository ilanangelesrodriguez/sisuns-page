import {IRol} from "./IRol";

export interface IUser {
    id: number;
    nombre: string;
    correo: string;
    contrasena: string;
    rol: IRol;
}
