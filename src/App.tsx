import "@/global.css";
import "@ant-design/v5-patch-for-react-19";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { queryClient } from "./data/libs/query-client";
import { router } from "@/routes/index";
import ThemeContext from "@/data/context/theme-context";

function App() {
  return (
    <HelmetProvider>
      <ThemeContext>
        <Helmet titleTemplate="%s | Antd Template" defaultTitle="Antd" />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeContext>
    </HelmetProvider>
  );
}

export default App;
