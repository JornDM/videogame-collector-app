import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

const ProtectedRoute = ({ children }: any) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/login" replace />;

  return <>{children}</>;
};

export default ProtectedRoute;
