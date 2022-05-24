import { useState, useEffect } from "react";

import { HashLink } from "react-router-hash-link";

import { IconButton } from "@mui/material";
import { Box, ButtonGroup } from "@mui/material";

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ForumIcon from '@mui/icons-material/Forum';

export default function FloatButton({ comment }) {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const top = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
            if (isShow === (top === 0)) setIsShow(!isShow);
        }, 250);
        return () => clearInterval(interval);
    });


    return (
        <Box sx={{
            position: 'fixed',
            bottom: { xs: "2vh", md: "5vh" },
            right: { xs: "2vh", md: "5vh" },
        }} >
            <ButtonGroup orientation="vertical" variant="contained" >
                <Box bgcolor={"primary.main"}>

                    {
                        (isShow) ? <IconButton size="large" component={HashLink} to="#" smooth >
                            <ArrowUpwardIcon />
                        </IconButton> : null}
                </Box>{
                    (comment) ? <Box bgcolor={"primary.main"}>
                        <IconButton size="large" component={HashLink} to="#comment" smooth scroll={
                            (el) => {
                                const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
                                const yOffset = -80;
                                window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
                            }
                        }>
                            <ForumIcon />
                        </IconButton>
                    </Box> : null
                }
            </ButtonGroup> 
        </Box>
    );
}