import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import getMe from "./redux/slices/login/meThunk";

function App() {
  const userRole = useSelector((state) => state.auth.user?.role_name);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.getItem("userToken") &&
      dispatch(getMe({ token: localStorage.getItem("userToken") }));
  }, []);

  return (
    <>
      <BrowserRouter>
        <AppRoutes role={userRole} />
      </BrowserRouter>
    </>
  );
}

export default App;

// tahoratxonasi bormi?
