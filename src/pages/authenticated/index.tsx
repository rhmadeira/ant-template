import { useAuthStore } from "@/data/stores/auth-store";
import { Navigate, Outlet } from "react-router-dom";

export default function Authenticated() {
  const accessToken = useAuthStore((state) => state.accessToken);

  return accessToken ? <Outlet /> : <Navigate to={"/login"} />;
}
