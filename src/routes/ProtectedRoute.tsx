import {FC} from "react";
import {Navigate, Outlet} from "react-router-dom";
import {useAppSelector} from "../redux/hooks.ts";

const ProtectedRoute: FC = () => {
  const isLoggedin = useAppSelector((state) => state.authReducer.isLoggedIn);
  return isLoggedin ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
