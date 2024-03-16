import {Rol} from "./IRol";

export interface IUser {
    id: string;
    nombre: string;
    correo: string;
    contrasena: string;
    rol: Rol;
}
