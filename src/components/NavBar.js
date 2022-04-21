import { useState } from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import logoIMG from "../res/imgs/logo.png";
import sun from "../res/imgs/LightDark/sun-fill.svg";
import moon from "../res/imgs/LightDark/moon-stars-fill.svg";

const sites = [
    ["主页", "/"],
    ["关于", "/about"],
    ["帮助", "/help"],
    ["讨论", "/discussion"],
    ["参与", "/participate"],
    ["Q&A", "/Q&A"],
    ["鸣谢", "/thanks"]
];

export default function NavBar() {
    const theme = document.documentElement.getAttribute("data-theme");

    const [isDark, setIsDark] = useState(theme === "dark");
    const [expanded, setExpanded] = useState(false);

    const DOM = [];
    for (let i of sites) {
        DOM.push(
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to={i[1]} >{i[0]}</Nav.Link>
        );
    }

    function changeTheme() {
        const light = "https://rthmiho.top/css/light.css";
        const dark = "https://rthmiho.top/css/dark.css";

        if (theme === "light") {
            document.getElementById("Themestyle").href = dark;
            setIsDark(true);
            document.documentElement.setAttribute("data-theme", "dark");

        } else {
            document.getElementById("Themestyle").href = light;
            setIsDark(false);
            document.documentElement.setAttribute("data-theme", "light");
        }
    }

    return (
        <Navbar expanded={expanded} bg={(isDark) ? "dark" : "light"} variant={(isDark) ? "dark" : "light"} expand="lg" sticky="top">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" >
                    <img
                        alt="logo"
                        src={logoIMG}
                        height={50}
                        width={50}
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => { setExpanded(!expanded) }} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {DOM}

                    </Nav>
                    <img
                        alt="switcher" src={(isDark) ? moon : sun}
                        height={30}
                        width={30}
                        onClick={changeTheme}
                    />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}