import "@/global.css";
import "@ant-design/v5-patch-for-react-19";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { queryClient } from "./data/libs/query-client";
import { router } from "@/routes/index";
import ThemeContext from "@/data/context/theme-context";
import { NotificationProvider } from "./data/provider/notification-provider";

function App() {
  return (
    <HelmetProvider>
      <ThemeContext>
        <NotificationProvider>
          <Helmet titleTemplate="%s | Antd Template" defaultTitle="Antd" />
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </NotificationProvider>
      </ThemeContext>
    </HelmetProvider>
  );
}

export default App;
