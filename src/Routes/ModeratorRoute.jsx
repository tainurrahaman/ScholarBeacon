import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";

const ModeratorRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-20">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (user) {
    if (user.role === "moderator") {
      return children;
    }
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default ModeratorRoute;
