import React from "react";
import { Navigate } from "react-router-dom";
import BasicLayout from "../layout/basicLayout";

const ProtectedRoute = ({ children }) => {
  return localStorage.getItem("auth_token") ? (
    <BasicLayout>{children}</BasicLayout>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
