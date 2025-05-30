import { Navigate } from "react-router";
import React from "react";

interface ProtectedRouteProps {
  element: React.ReactElement;
  isAuthenticated: boolean;
}

const ProtectedRoute = ({ element, isAuthenticated }: ProtectedRouteProps) => {
  return isAuthenticated ? <>{element}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
