import { Row, Col, Image, Button } from "react-bootstrap";

import miho from "../res/imgs/miho.png";

export default function Home() {
    return (
        <Row>
            <Col lg={{ span: 3, offset: 3 }}>
                <Image
                    alt="miho" src={miho} fluid="true"
                    className="float-left"
                />
            </Col>
            <Col lg={3}>
                <h1 className="display-1">美穗酱Miho</h1>
                <Button>介绍</Button>
                {" "}
                <Button>部署教程</Button>
                {
                    "  <--暂时没用的按钮（）"
                }
            </Col>
        </Row>
    );
}