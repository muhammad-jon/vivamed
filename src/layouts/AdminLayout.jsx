import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/login/authSlice";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Flex } from "antd";
import { routes } from "../routes/routes";

const AdminLayout = () => {
  const user = useSelector((state) => state.auth?.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onHandleLogout() {
    dispatch(logout());
    return navigate("/");
  }

  const permissions = useSelector(
    (state) => state.auth?.user?.role_permissions
  );
  console.log(permissions);

  function hasPermission(permission) {
    return permissions?.includes((el) => el.codename == permission);
  }

  console.log(hasPermission("view_goods"));

  return (
    <div>
      <h1>User: {user?.role_name}</h1>
      <button onClick={onHandleLogout}>Log out</button>

      <Flex
        gap={2}
        align="top"
        style={{ background: "lightgray", color: "white" }}
      >
        <div>
          {routes.map((el) => (
            <div key={el.name}>
              {permissions?.some(
                (permission) => permission.codename === el.path
              ) && <Link to={el.path}>{el.name}</Link>}
            </div>
          ))}
        </div>
        <div>
          <Outlet />
        </div>
      </Flex>
    </div>
  );
};

export default AdminLayout;
