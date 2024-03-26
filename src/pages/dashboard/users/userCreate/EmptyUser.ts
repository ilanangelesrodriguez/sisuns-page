import {IUser} from "../../../../models/interfaces";

export const emptyUser: IUser = {
    id: 0,
    nombre: '',
    correo: '',
    contrasena: '',
    rol: { id: 0, nombre: '' },
};