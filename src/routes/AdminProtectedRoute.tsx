import {FC} from "react";
import {Navigate, Outlet} from "react-router-dom";
import {useAppSelector} from "../redux/hooks.ts";

const AdminProtectedRoute: FC = () => {
  const isLoggedin = useAppSelector((state) => state.authReducer.isLoggedIn);
  return isLoggedin ? <Outlet /> : <Navigate to="/403" />;
};

export default AdminProtectedRoute;
