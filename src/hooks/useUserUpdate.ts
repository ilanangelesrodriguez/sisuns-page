import { useState } from 'react';
import { IUser } from '../models/IUser';
import { updateUser } from '../services/userService';

export function useUserUpdate(userId: number) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function handleUpdate(updatedUser: IUser) {
        setLoading(true);
        let updatedUserResponse = null;
        try {
            updatedUserResponse = await updateUser(userId, updatedUser);
        } catch (error) {
            setError('Error al actualizar el usuario');
        } finally {
            setLoading(false);
        }
        return updatedUserResponse;
    }

    return { handleUpdate, loading, error };
}
