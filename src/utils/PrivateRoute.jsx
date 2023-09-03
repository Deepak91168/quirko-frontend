import { Outlet, Navigate } from "react-router";
import useLoginStatus from "../hooks/useLoginStatus";
export default function PrivateRoute() {
  const { loggedIn, checkingStatus } = useLoginStatus();
  if (checkingStatus) {
    return <div>Loading...</div>;
  }
  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
}
