import React from 'react';
import {Col, Form, Row} from "react-bootstrap";

function Search(props) {
    return (
        <Row>
            <Form.Group as={Col} md={2} controlId="formSearch">
                <Form.Label>Search</Form.Label>
                <Form.Control type="text" placeholder="searched phrase" value={props.search} onChange={(event) => props.changeSort(event, 'search')} />
            </Form.Group>
        </Row>
    );
}

export default Search;