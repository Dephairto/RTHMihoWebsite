import { Tab, Row, Col, Nav } from "react-bootstrap";

import Markdown from "../components/Markdown";
import structure from "../res/texts/helps/structure.json";

export default function Help() {
    const tableOfContent = [];
    const content = [];

    let k = 0
    for (let i in structure) {
        tableOfContent.push(
            <Nav.Item><Nav.Link eventKey={k}>{i}</Nav.Link></Nav.Item>
        );
        content.push(
            <Tab.Pane eventKey={k}>
                <Markdown url={`/texts/helps${structure[i]}`} />
            </Tab.Pane>
        );
        k++;
    }

    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
            <Row>
                <Col sm={2}>
                    <Nav variant="pills" className="flex-column">
                        {tableOfContent}
                    </Nav>
                </Col>
                <Col sm={10}>
                    <Tab.Content>
                        {content}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}