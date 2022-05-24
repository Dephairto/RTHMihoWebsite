import { Link, Routes, Route } from "react-router-dom";

import { List, ListItemButton, ListItemText } from "@mui/material";

import { HashLink } from "react-router-hash-link";

import Markdown from "../../components/Markdown";

export default function TOC(props) {
  return (
    <List>
      {props.info.list.map((info, index) => (
        <>
          <ListItemButton component={Link} to={(index===0) ? "" : `${index}`} key={info[0]} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
            <ListItemText primary={info[0]} />
          </ListItemButton>

          <Routes>
            <Route key={info[0]} path={(index===0) ? "" : `${index}`} element={
              <List sx={{ pl : 4 }} >
                <Markdown url={`texts/${props.info.preFolder}/${info[1]}`} TOC={
                  props => (
                    <ListItemButton component={HashLink} to={`#${props.children}`} smooth scroll={
                      (el) => {
                        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
                        const yOffset = -80; 
                        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
                      }
                    }>
                      <ListItemText primary={`> ${props.children}`} />
                    </ListItemButton>
                  )
                } />
              </List>} />
          </Routes>
        </>
      ))}
    </List>
  );
}