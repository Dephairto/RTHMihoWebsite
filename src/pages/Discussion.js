import { useEffect } from "react";

import Waline from "@waline/client";
import Col from "react-bootstrap/Col";

export default function Discussion() {
    useEffect(() => {
        Waline({
            el : "#Discussion",
            serverURL: "https://rthmiho-comment.vercel.app",
            path : "/discussion",
            dark : 'html[data-theme="dark"]',
            meta : ['nick', 'mail'],
            wordLimit : 5000,
            
        });
    });

    return (
        <Col sm={{ span: 6, offset: 3 }} >
            <div id="Discussion"/>
        </Col>
    );   
}