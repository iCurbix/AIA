import React from 'react';
import {Container} from "react-bootstrap";
import Things from "./Things";

function Main() {
    return (
        <main className={"mt-3"}>
            <Container>
                <Things />
            </Container>
        </main>
    );
}

export default Main;