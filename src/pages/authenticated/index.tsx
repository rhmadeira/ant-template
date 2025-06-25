import { Navigate, Outlet } from "react-router-dom";

export default function Authenticated() {
  const accessToken = "true";
  // const accessToken = useAuthStore((x) => x.accessToken);
  // const getPermission = usePermissionStore((x) => x.getPermission);

  // useEffect(() => {
  //   getPermission();
  // }, [getPermission]);

  return accessToken ? <Outlet /> : <Navigate to={"/login"} />;
}
