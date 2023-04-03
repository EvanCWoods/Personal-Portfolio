import React from "react";
import jwt_decode from "jwt-decode";
import { Navigate } from "react-router-dom";
import { ValidateToken } from "../Utils/ValidateToken";

/**
 * A function that checks the JWT credentials and either returns the child elements or navigates the user to the home page.
 * @param children -> the child elements that will be rendered if the authorization is granted
 * @returns
 */
const ProtectedRoute = ({ children }: any) => {
    const token = localStorage.getItem("credentials");
    if (!token) {
        return <Navigate to="/" replace />;
    } else if (!ValidateToken(token)) {
        return <Navigate to="/" replace />;
    }
    const decoded = jwt_decode(token);
    console.log(decoded);
    return children;
};

export default ProtectedRoute;
