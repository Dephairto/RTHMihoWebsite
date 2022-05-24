import { AppBar, Toolbar, Button, Avatar, ButtonGroup, Box, Drawer, IconButton, Divider, ListItemIcon } from "@mui/material";

import { useState } from "react";

import MenuIcon from '@mui/icons-material/Menu';

import { Link } from "react-router-dom";

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';
import CommentIcon from '@mui/icons-material/Comment';

import { List, ListItemText, ListItemButton } from "@mui/material";

import logoImg from "../res/imgs/logo.png";

const links = [
    ["主页", "/", <HomeIcon />],
    ["关于", "/about", <InfoIcon />],
    ["帮助", "/helps", <ArticleIcon />],
    ["讨论", "/discussion", <CommentIcon />],
];  

export default function NavBar(props) {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggleDrawer = open => event => {
        if (event.type !== 'keydown' || (event.key !== 'Tab' && event.key !== 'Shift')) {
            setIsOpen(open);
        }
    };

    return (
        <>
            <AppBar position="sticky"  sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} >
                <Toolbar>
                    <Box sx={{ display: { xs: 'flex', md: 'none' },  mr : 2 }} ><MeunButton onClick={toggleDrawer(!isOpen)} /></Box>
                    <Box flexGrow={1} ><Logo /></Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }} flexGrow={1} ><LinkGroup /></Box>
                    <Box ><ThemeSwitcher /></Box>
                    
                </Toolbar>
            </AppBar >
            <Drawer 
                open={isOpen} 
                onClose={toggleDrawer(false)}
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    '& .MuiDrawer-paper': {  width: "75%" },
                }}
            >
                <Toolbar />
                <DrawerGroup />
                {
                    (props.TOC) ? <><Divider/>{props.TOC}</> : props.TOC
                }
            </Drawer>
        </>
    );
}

function Logo() {
    return (
        <Avatar
            alt="Logo"
            src={logoImg}
            variant="rounded"
            component={Link}
            to={"/"}
        />
    );
}

function LinkGroup(props) {
    const DOM = links.map(pair => (
        <Button component={Link} to={pair[1]} key={pair[0]} 
            startIcon={pair[2]}
        >
            {pair[0]}
        </Button>
    ));

    return (
        <ButtonGroup variant="outlined" color={"secondary"} orientation={(props.vertical) ? "vertical" : 'horizontal' } >
            {DOM}
        </ButtonGroup>
    );
}

function DrawerGroup(props) {
    const DOM = links.map(pair => (
        <ListItemButton component={Link} to={pair[1]} key={pair[0]} 
        >
            <ListItemIcon>
                {pair[2]}
              </ListItemIcon>
            <ListItemText primary={pair[0]} />
        </ListItemButton>
    ));

    return (
            <List >
            {
                DOM
            }
        </List>
    );

}

function ThemeSwitcher() {
    const [, update] = useState();

    return (
        <IconButton 
            onClick={() => {
                window.dispatchEvent(new Event("ChangeTheme"))
                update();
            }} 
            variant="outlined"
            color="secondary" 
        >
            {
                (document.documentElement.getAttribute("theme")==="light") ? 
                    <LightModeIcon /> : <DarkModeIcon />
            }
        </IconButton>
    );
}

function MeunButton(props) {
    return <MenuIcon onClick={props.onClick} />;
}