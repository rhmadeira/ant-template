import Authenticated from "@/pages/authenticated";
import Home from "@/pages/authenticated/home";
import NoAuthenticated from "@/pages/no-authenticated";
import Login from "@/pages/no-authenticated/login";
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
            element: <Navigate to={"/usuario"} />,
          },
          {
            path: "home",
            element: <Home />,
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
