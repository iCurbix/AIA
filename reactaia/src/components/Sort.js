import React from 'react';
import {Col, Form, Row} from "react-bootstrap";

function Sort(props) {
    return (
        <Row>
            <Form.Group as={Col} md={2} controlId="formSortby">
                <Form.Label>Sort by</Form.Label>
                <Form.Control as="select" value={props.howsort} onChange={(event) => props.changeSort(event, 'howsort')}>
                    <option>id</option>
                    <option>name</option>
                    <option>score</option>
                </Form.Control>
            </Form.Group>
            <Form.Group as={Col} md={2}>
                <Form.Label>ascending/descending</Form.Label>
                <Form.Control as="select" value={props.ascdesc} onChange={(event) => props.changeSort(event, 'ascdesc')}>
                    <option>asc</option>
                    <option>desc</option>
                </Form.Control>
            </Form.Group>
        </Row>
    );
}

export default Sort;