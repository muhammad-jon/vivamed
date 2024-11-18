import { Routes, Route } from "react-router-dom";
import RoleBasedRoute from "./RoleBasedRoute";

import AdminLayout from "../layouts/AdminLayout";
// import DoctorLayout from "../layouts/DoctorLayout";
import LoginLayout from "../layouts/LoginLayout";
import NotFoundPage from "../views/NotFoundPage";

import { routes } from "./routes";

// eslint-disable-next-line react/prop-types
const AppRoutes = ({ role }) => {
  return (
    <Routes>
      <Route path="/login" element={<LoginLayout />} />
      <Route path="/" element={<RoleBasedRoute userRole={role} />} />
      <Route path="/admin" element={<AdminLayout />}>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

// patients, admissions, rooms

// show_outpatientadmission, show_outpatient, show_room

export default AppRoutes;
