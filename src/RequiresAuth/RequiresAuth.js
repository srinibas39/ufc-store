import { Navigate, useLocation } from "react-router-dom"

export const RequiresAuth = ({ token, children }) => {
    const location = useLocation();
    return token ? children : <Navigate to="/login" state={{ from: location }} replace />
}