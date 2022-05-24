import { Route, Routes } from "react-router-dom";

import { Box, Drawer, Toolbar } from "@mui/material";
import Grid from "@mui/material/Grid";

import Markdown from "../../components/Markdown";
import TOC from "./TOC";

import NavBar from "../../components/NavBar";
import Comment from "../../components/Comment";

import FloatButton from "../../components/FloatButton";

export default function DocPage(props) {
  const content = (
    <Routes>
      {props.info.list.map((info, index) => (
        <Route key={info[0]} path={(index===0) ? "" : `${index}`} element={<>
         <Markdown url={`texts/${props.info.preFolder}/${info[1]}`} />
          { (props.comment) ? <Comment slug={`/${props.info.preFolder}/${info[1]}`} /> : null}
        </>
        }/>
      ))}
    </Routes>
  );

  return (
    <>
      <NavBar TOC={<TOC info={props.info} />} />

      <Drawer
        open
        hideBackdrop
        sx={{
          display: { xs: 'none', md: 'flex' },
          '& .MuiDrawer-paper': { width: "calc(100% / 6)", bgcolor: "primary.main" },
        }}
        variant="permanent"
      >
        <Toolbar />
        <TOC info={props.info} />
      </Drawer>

      <Grid container>
        <Grid item md={2} sx={{ display: { xs: 'none', md: "block" } }} />
        <Grid
          container item
          xs={12} md={10}
          justifyContent="center"
        >
          <Grid item xs={12} md={10} >
            {content}

            <Box style={{ height: "20vh", width: "100%" }} />
          </Grid>
        </Grid>
      </Grid>

        <FloatButton comment={props.comment} />
    </>
  );
}