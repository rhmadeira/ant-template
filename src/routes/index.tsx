import Authenticated from "@/pages/authenticated";
import NoAuthenticated from "@/pages/no-authenticated";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Authenticated />,
    children: [
      {
        path: "/",
        element: <WebLayout />,
        children: [
          {
            path: "/",
            element: <Navigate to={"/usuario"} />,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <NoAuthenticated />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/azure-redirect",
        element: <AzureRedirect />,
      },
    ],
  },
]);
