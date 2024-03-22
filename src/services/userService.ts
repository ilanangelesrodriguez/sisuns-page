import {fetchData} from './apiService';
import {IUser} from "../models/IUser";

async function getUsers() {
    return await fetchData('/usuarios');
}
async function createUser(userData: IUser) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    };
    return await fetchData('/usuarios', options);
}
async function deleteUser(userId: number) {
    const options = {
        method: 'DELETE',
    };
    return await fetchData(`/usuarios/${userId}`, options);
}
async function updateUser(userId: number, updatedUserData: IUser) {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUserData),
    };
    return await fetchData(`/usuarios/${userId}`, options);
}

export { getUsers, createUser, deleteUser, updateUser };
