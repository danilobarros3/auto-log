import { Dashboard } from "@/pages/Dashboard";
import { Services } from "@/pages/Services";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Dashboard /> } />
                <Route path="/services" element={ <Services /> } />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;