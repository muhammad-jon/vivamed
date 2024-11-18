import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const RoleRoute = ({ userRole }) => {
  console.log(userRole)
  if (!userRole) {
    return <Navigate to={"/login"} />;
  }
  if (userRole === "ADMIN") {
    return <Navigate to="/admin" />;
  } else if (userRole === "DOCTOR") {
    return <Navigate to="/admin" />;
  }
  return <Navigate to="/login" />;
};

export default RoleRoute;
