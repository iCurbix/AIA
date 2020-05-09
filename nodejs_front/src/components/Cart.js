import React from 'react';
import {Container} from "react-bootstrap";
import Things from "./Things";

function Cart() {
    return (
        <main className={"mt-3"}>
            <Container>
                <div style={{display: 'flex', justifyContent: 'center'}}><p>CART</p></div>
                <Things isCart={true} />
            </Container>
        </main>
    );
}

export default Cart;