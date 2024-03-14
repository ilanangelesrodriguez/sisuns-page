import { Navigate, Route } from 'react-router-dom';
import React from "react";

interface PrivateRouteProps {
    path: string;
    element: React.ReactElement;
    isAuthenticated: boolean;
}

export function PrivateRoute({ path, element, isAuthenticated }: PrivateRouteProps) {
    return (
        <Route
            path={path}
            element={isAuthenticated ? element : <Navigate to="/login" replace />}
        />
    );
}