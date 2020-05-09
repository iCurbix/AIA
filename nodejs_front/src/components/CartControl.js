import React from 'react';
import {Row, Col, Button} from "react-bootstrap";

function CartControl(props) {
    return (
        <Row className={'mt-3'}>
            <Col md={3} />
            <Col md={3}><Button variant={"danger"} onClick={()=>props.delAll()}>remove all items</Button></Col>
            <Col md={3}><Button variant={"success"}onClick={()=>props.buyThings()}>buy things</Button></Col>
        </Row>
    );
}

export default CartControl;