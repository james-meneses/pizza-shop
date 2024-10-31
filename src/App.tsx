import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./components/theme/theme-provider";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | pizza.shop" />
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </HelmetProvider>
  );
}
