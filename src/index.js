import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";

import CssBaseline from '@mui/material/CssBaseline';
import createTheme from "@mui/material/styles/createTheme";
import responsiveFontSizes from "@mui/material/styles/responsiveFontSizes";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import Router from "./components/Router";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const listener = window.addEventListener("ChangeTheme", () => {
            const newTheme = (theme === "light") ? "dark" : "light";
            document.documentElement.setAttribute("theme", newTheme);
            setTheme(newTheme);
        });

        return () => window.removeEventListener("ChangeTheme", listener);
    });

    const themes = {
        light: responsiveFontSizes(createTheme({
            palette: {
                primary: {
                    main: '#f4deea',
                },
                secondary: {
                    main: "#003f34",
                },
            },
        })),
        dark: responsiveFontSizes(createTheme({
            palette: {
                mode: "dark",
                secondary: {
                    main: "#f4deea"
                },
                primary: {
                    main: "#272727"
                },
                background: {
                    default: "#1f1e33"
                }
            }
        }))
    }
    
    return (
        <ThemeProvider theme={themes[theme]} >
            <CssBaseline />
            <Router />
        </ThemeProvider>
    );
}

createRoot(document.getElementById("root")).render(<App />);