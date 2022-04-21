import { useEffect } from "react";

import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

import NavBar from "./NavBar";
import Home from "../pages/Home";
import About from "../pages/About";
import Help from "../pages/Help";
import Error from "../pages/Error";
import Discussion from "../pages/Discussion";
import Participate from "../pages/Participate";
import QAndA from "../pages/QAndA";
import Thanks from "../pages/Thanks";

export default function Router() {
    return (
        <BrowserRouter> 
            <NavBar />
            <Container fluid >
                <Routes>
                    <Route exact path="/" element={<JumpHandler />} />
                    <Route exact path="/help" element={<Help />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/participate" element={<Participate />} />
                    <Route exact path="/discussion" element={<Discussion />} />
                    <Route exact path={"/Q&A"} element={<QAndA />} />
                    <Route exact path="/thanks" element={<Thanks />} />
                    <Route exact path="*" element={<Error />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

function JumpHandler() {
    const navigate = useNavigate()

    useEffect(() => {
        const url = new URL(window.location.href).search;
        if (url.length > 0) {
            navigate(url.slice(24, url.length));
        }
    })

    return <Home />;
}