import React from 'react';
import {ListGroupItem, Row, Col, Image, Button, Form} from "react-bootstrap";

function Thing(props) {
    return (
        <ListGroupItem>
            <Row>
                <Col md={2}>{props.thing.name}</Col>
                <Col md={2}><Image  src={props.thing.img} style={{height: 50}} /></Col>
                <Col>{props.thing.description}</Col>
                <Form.Group as={Col} md={1.5} controlId="formScore">
                    <Form.Control as="select" value={props.thing.score} onChange={(event) => props.changeScore(event, props.thing.id)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </Form.Control>
                </Form.Group>
                <Col md={1}><Button variant={"danger"} onClick={() => props.deletHandler(props.thing.id)}>delet</Button></Col>
            </Row>
        </ListGroupItem>
    );
}

export default Thing;