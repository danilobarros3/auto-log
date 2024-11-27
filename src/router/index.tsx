import { Home } from "@/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route>
                        <Route path="/" element={ <Home/> } />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;