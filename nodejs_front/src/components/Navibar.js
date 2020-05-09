import React from 'react';
import {Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import cart from "../cart.png"

function Navibar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Link to={'/'}>
                <Navbar.Brand>Szklep</Navbar.Brand>
            </Link>
            <span className={'mr-auto'}/>
            <Link to={'/cart'}>
                <nav><img src={cart} alt={'cart'} width={"32"}/></nav>
            </Link>
        </Navbar>
    );
}

export default Navibar;