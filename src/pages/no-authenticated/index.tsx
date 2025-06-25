import { Navigate, Outlet } from "react-router-dom";

export default function NoAuthenticated() {
  const accessToken = "true";

  return <>{!accessToken ? <Outlet /> : <Navigate to={"/usuario"} />}</>;
}
