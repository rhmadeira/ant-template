import Authenticated from "@/pages/authenticated";
import NoAuthenticated from "@/pages/no-authenticated";
import Login from "@/pages/no-authenticated/login";
import { APP_ROUTES } from "@/shared/constants/app-routes";
import MainLayout from "@/shared/layout/main-layout";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Authenticated />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <Navigate to="/usuario" />,
          },
          ...APP_ROUTES.map(({ path, element, children = [] }) => ({
            path,
            element,
            children,
          })),
          {
            path: "*",
            element: <Navigate to="/usuario" replace />,
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
      // {
      //   path: "/azure-redirect",
      //   element: <AzureRedirect />,
      // },
    ],
  },
]);
