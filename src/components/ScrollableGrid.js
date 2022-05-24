import { useMediaQuery, Grid } from "@mui/material";

export default function ScrollableGrid(props) {
    let height = 56;
    if (useMediaQuery("@media (min-width:0px) and (orientation: landscape)"))
        height = 48
    if (useMediaQuery("@media (min-width:600px)"))
        height = 64

    return (
        <Grid {...props} style={{ 
            height: `calc(100vh - ${height}px)`, 
            maxHeight: `calc(100vh - ${height}px)`, 
        }} />
    );
}