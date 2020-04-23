import React from 'react';
import {Form, Col, Button} from "react-bootstrap";

class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            image: "",
            description: "",
            score: "5"
        }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event, wha) {
        const val = event.target.value
        this.setState(prevState => {
            return {
                ...prevState,
                [wha]: val
            }
        })
    }

    handleAdd() {
        const img = this.state.image
        this.props.addThing({
            name: this.state.title,
            img: img === "" ? "https://i.imgur.com/14COhR2.png" : img,
            description: this.state.description,
            score: this.state.score
        })
        this.setState({
            title: "",
            image: "",
            description: "",
            score: "5"
        })
    }

    render() {
        return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col} md={2} controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="enter title" value={this.state.title} onChange={(event) => this.handleChange(event, 'title')} />
                    </Form.Group>

                    <Form.Group as={Col} md={2} controlId="formImage">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" placeholder="src or nothing" value={this.state.image} onChange={(event) => this.handleChange(event, 'image')} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formDescriprion">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="enter description" value={this.state.description} onChange={(event) => this.handleChange(event, 'description')} />
                    </Form.Group>

                    <Form.Group as={Col} md={1} controlId="formScore">
                        <Form.Label>Score</Form.Label>
                        <Form.Control as="select" value={this.state.score} onChange={(event) => this.handleChange(event, 'score')} >
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
                    <Form.Group as={Col} md={1} controlId="formAdd">
                        <Form.Label>Add</Form.Label>
                        <Button variant="success" onClick={() => this.handleAdd()}>
                            Add
                        </Button>
                    </Form.Group>

                </Form.Row>
            </Form>
        );
    }
}

export default AddForm;