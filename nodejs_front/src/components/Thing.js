import React from 'react';
import {ListGroupItem, Row, Col, Button} from "react-bootstrap";

function Thing(props) {
    return (
        <ListGroupItem>
            <Row>
                <Col md={10}>{props.thing.product}</Col>
                {(props.isCart) ?
                    <Col md={2}><Button variant={"danger"} onClick={() => {props.delThing(props.thing.id)}}>remove</Button></Col>
                    :
                    <Col md={2}><Button variant={"success"} onClick={() => {props.addThing(props.thing.id)}}>add to cart</Button></Col>
                }

            </Row>
        </ListGroupItem>
    );
}

export default Thing;