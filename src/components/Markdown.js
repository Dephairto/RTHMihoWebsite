import { useState } from "react";

import MuiMarkdown from "mui-markdown";
import ReactMarkdown from "react-markdown";

import { CardMedia, Box } from "@mui/material";
import { Typography } from "@mui/material";

function fileToString(url, callback) {
  fetch(url)
    .then(file => file.text())
    .then(text => callback(text));
}

export default function Markdown(props) {
  const [content, setContent] = useState("");

  fileToString(
    require(`../res/${props.url}/md.md`),
    text => { setContent(text); }
  );

  if (props.TOC) {
    return (
      <ReactMarkdown
        children={content}
        allowedElements={["h2"]}
        components={{ h2: props.TOC }}
      />
    );
  }

  return (
    <Box sx={{ p: { xs: 3, md: 5 } }} >
      <MuiMarkdown
        children={content}
        overrides={{
          h1: { component: Typo("h2") },
          h2: { component: Typo("h3") },
          h3: { component: Typo("h4") },
          p: { component: Typo("paragraph", "2em") },
          img: {
            component: prop => <CardMedia
              component="img"
              image={(() => {
                try {
                  return (prop.src.startsWith("http")) ? prop.src : require(`../res/${props.url}/${prop.src}`)
                } catch (e) {
                  return undefined;
                }
              })()}
              alt={prop.alt}
            />
          }
        }}
      />
    </Box>
  );
}

const Typo = (type, indent) => (props) => {
  return (
    <Typography variant={type} paragraph={type === "paragraph"} sx={{ mb: 2, mt: 2, textIndent: indent }} id={props.children} >
      {props.children}
    </Typography>
  );
}