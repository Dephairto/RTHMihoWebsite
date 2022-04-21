import Col from "react-bootstrap/Col";

import Markdown from "../components/Markdown";

export default function QAndA() {
    return (
        <Col sm={{ span: 6, offset: 3 }} >
            <Markdown url={"/texts/Q&A"} />
        </Col>
    );
}