import { Dashboard } from "@/pages/Dashboard";
import { Services } from "@/pages/Services";
import Login from "@/pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Dashboard /> } />
                <Route path="/services" element={ <Services /> } />
                <Route path="/login" element={ <Login /> } />

            </Routes>
        </BrowserRouter>
    );
};

export default Router;