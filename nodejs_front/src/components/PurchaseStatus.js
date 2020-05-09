import React from 'react';
import {Container} from "react-bootstrap";

class PurchaseStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: null
        }
    }
    componentDidMount() {
        fetch('http://localhost:3500/purchase/status', {method: 'GET', credentials: 'include'}).then(res => res.json())
            .then((result) => {
                this.setState({status: result.status})
            })
    }

    render() {
        return (
            <main className={"mt-3"}>
                <Container>
                    <div style={{display: 'flex', justifyContent: 'center'}}><p>Purchase Status</p></div>
                    <p>Your purchase status: {this.state.status}</p>
                </Container>
            </main>
        );
    }
}

export default PurchaseStatus;