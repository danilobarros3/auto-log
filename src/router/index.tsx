import { Dashboard } from "@/pages/Dashboard";
import { Services } from "@/pages/Services";
import Login from "@/pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Config from "@/pages/Configuration";
import { RegisterCar } from "@/pages/RegisterCar/components";
import { AuthGuard } from "@/components/AuthGuard";
import PrivateRouteTemplate from "@/components/PrivateRouteTemplate";
import { Parts } from "@/pages/Parts/components";
import RegisterForm from "@/pages/Register";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />
        </Route>
        <Route element={<AuthGuard isPrivate />}>
          <Route>
            <Route
              path="/"
              element={
                <PrivateRouteTemplate>
                  <Dashboard />
                </PrivateRouteTemplate>
              }
            />
          </Route>
        </Route>
        <Route element={<AuthGuard isPrivate />}>
          <Route>
            <Route
              path="/services"
              element={
                <PrivateRouteTemplate>
                  <Services />
                </PrivateRouteTemplate>
              }
            />
          </Route>
        </Route>
        <Route element={<AuthGuard isPrivate />}>
          <Route>
            <Route
              path="/register"
              element={
                <PrivateRouteTemplate>
                  <RegisterCar />
                </PrivateRouteTemplate>
              }
            />
          </Route>
        </Route>
        <Route element={<AuthGuard isPrivate />}>
          <Route>
            <Route
              path="/configuration"
              element={
                <PrivateRouteTemplate>
                  <Config />
                </PrivateRouteTemplate>
              }
            />
          </Route>
        </Route>
        <Route element={<AuthGuard isPrivate />}>
          <Route>
            <Route
              path="/parts"
              element={
                <PrivateRouteTemplate>
                  <Parts />
                </PrivateRouteTemplate>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
