// src/data/routes/app-routes.ts
import {
  UserOutlined,
  ApartmentOutlined,
  GroupOutlined,
} from "@ant-design/icons";
import Users from "@/pages/authenticated/users";
import Branches from "@/pages/authenticated/branches";
import Groups from "@/pages/authenticated/groups";
import EditGroup from "@/pages/authenticated/groups/edit-group";
import CreateGroup from "@/pages/authenticated/groups/create-group";
import EditUser from "@/pages/authenticated/users/edit-user";
import CreateUser from "@/pages/authenticated/users/create-user";
import CreateBranch from "@/pages/authenticated/branches/create-branch";
import EditBranch from "@/pages/authenticated/branches/edit-branch";

export const APP_ROUTES = [
  // {
  //   path: "home",
  //   element: <Home />,
  //   label: "Home",
  //   icon: <HomeOutlined />,
  //   showInSidebar: true,
  // },
  {
    path: "usuario",
    element: <Users />,
    label: "Usuários",
    icon: <UserOutlined />,
    showInSidebar: true,
    children: [
      {
        path: ":id",
        element: <EditUser />,
      },
      {
        path: "criar",
        element: <CreateUser />,
      },
      {
        path: "permissao/:id",
        element: <EditUser />,
      },
      {
        path: "grupo/:id",
        element: <CreateUser />,
      },
    ],
  },
  //  {
  //   path: "usuario/:id",
  //   element: <EditUser />,
  // },
  // {
  //   path: "usuario/criar",
  //   element: <CreateUser />,
  // },
  // {
  //   path: "usuario/permissao/:id",
  //   element: <EditUser />,
  // },
  // {
  //   path: "usuario/grupo/:id",
  //   element: <CreateUser />,
  // },
  {
    path: "filial",
    element: <Branches />,
    label: "Filiais",
    icon: <ApartmentOutlined />,
    showInSidebar: true,
  },
  {
    path: "filial/criar",
    element: <CreateBranch />,
    showInSidebar: false,
  },
  {
    path: "filial/:id",
    element: <EditBranch />,
    showInSidebar: false,
  },
  {
    path: "grupo",
    element: <Groups />,
    label: "Grupos",
    icon: <GroupOutlined />,
    showInSidebar: true,
    children: [
      {
        path: ":id",
        element: <EditGroup />,
      },
      {
        path: "criar",
        element: <CreateGroup />,
      },
    ],
  },
];
