import { useState } from 'react';
import { useAuth } from './useAuth';
import { IUser } from '../models/IUser';
import { updateUser } from '../services/userService';

export function useUserUpdate() {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function handleUpdate(updatedUser: IUser) {
        if (!user) {
            throw new Error('User is null');
        }

        setLoading(true);
        let updatedUserResponse = null;
        try {
            updatedUserResponse = await updateUser(user.id, updatedUser);
        } catch (error) {
            setError('Error al actualizar el usuario');
        } finally {
            setLoading(false);
        }
        return updatedUserResponse;
    }

    return { user, handleUpdate, loading, error };
}
