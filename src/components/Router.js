import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, About, Discussion, Help } from "../page/pages";

export default function Router() {
    const routes = [
        [ "/", <Home /> ],
        [ "/helps/*", <Help /> ],
        [ "/about/*", <About /> ],
        [ "/discussion", <Discussion /> ],
        [ "*", <div>404 NOT FOUND</div> ]
    ].map(info => (
        <Route key={info[0]} path={info[0]} element={info[1]} />
    ));

    return (
        <BrowserRouter>
            <Routes>
                { routes }
            </Routes>
        </BrowserRouter>
    );
}