import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/data/store/auth-store";

export default function NoAuthenticated() {
  const accessToken = useAuthStore((x) => x.accessToken);

  return <>{!accessToken ? <Outlet /> : <Navigate to={"/usuario"} />}</>;
}
