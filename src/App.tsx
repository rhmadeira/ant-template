import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { queryClient } from "./data/libs/query-client";
import { ToastContainer, Zoom } from "react-toastify";
import { router } from "@/routes/index";
import ThemeContext from "@/data/context/theme-context";

function App() {
  return (
    <HelmetProvider>
      <ThemeContext>
        <Helmet titleTemplate="%s | Gmill Vendas" defaultTitle="Identity" />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Zoom}
          />
        </QueryClientProvider>
      </ThemeContext>
    </HelmetProvider>
  );
}

export default App;
