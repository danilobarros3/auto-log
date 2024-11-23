import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import PrivateRouteTemplate from "@/components/PrivateRouteTemplate";
import { Dashboard } from "@/pages/Dashboard";

const Router = () => {
  return (
    <SidebarProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<PrivateRouteTemplate><Dashboard /></PrivateRouteTemplate>} />
        </Routes>
      </BrowserRouter>
    </SidebarProvider>
  );
};

export default Router;
