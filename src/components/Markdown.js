import { useState } from "react";
import { Image } from "react-bootstrap";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkUnwrapImages from "remark-unwrap-images";

import "./anchor.css";

function fileToString(url, callback) {
    fetch(url)
        .then(file => file.text())
        .then(text => callback(text));
}

export default function Markdown(props) {
    const [content, setContent] = useState("");

    fileToString(
        require(`../res${props.url}/md.md`),
        text => { setContent(text); }
    );

    return (
        <ReactMarkdown
            children={content}
            remarkPlugins={[remarkGfm, remarkUnwrapImages]}
            transformImageUri={
                uri => uri.startsWith("http") ? uri : require(`../res${props.url}/${uri}`)
            }
            components={{
                img : props => <Image alt={props.alt} src={props.src} fluid/>,
                h1 : props => <h1 id={props.children} >{props.children}</h1>,
                h2 : props => <h2 id={props.children} >{props.children}</h2>,
                h3 : props => <h3 id={props.children} >{props.children}</h3>,
                h4 : props => <h4 id={props.children} >{props.children}</h4>,
                h5 : props => <h5 id={props.children} >{props.children}</h5>,
                h6 : props => <h6 id={props.children} >{props.children}</h6>,
            }}
        />
    );
}