import { Navigate, useLocation } from "react-router-dom"
import { RequiresAuthProps } from "./RequiresAuth.types";

export const RequiresAuth = ({ token, children }:RequiresAuthProps):JSX.Element => {
    const location = useLocation();
    // @ts-ignore
    return token ? children : <Navigate to="/login" state={{ from: location }} replace />
}