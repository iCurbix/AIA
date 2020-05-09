import React from 'react';
import {Container} from "react-bootstrap";
import Things from "./Things";

function Home() {
    return (
        <main className={"mt-3"}>
            <Container>
                <div style={{display: 'flex', justifyContent: 'center'}}><p>HOME</p></div>
                <Things isCart={false} />
            </Container>
        </main>
    );
}

export default Home;