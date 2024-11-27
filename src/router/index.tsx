import { Dashboard } from "@/pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route>
                        <Route path="/" element={ <Dashboard/> } />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;