import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <RouterProvider router={router} />
      <Toaster />
    </HelmetProvider>
  );
}
