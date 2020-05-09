import React, {Component} from 'react';
import Thing from "./Thing";
import {ListGroup} from "react-bootstrap";
import Cookies from 'universal-cookie';
import CartControl from "./CartControl";
import { Redirect } from "react-router-dom";

const cookies = new Cookies()

class Things extends Component {
    constructor(props) {
        super(props);
        this.state = {
            things: [],
            cart: cookies.get('cart'),
            redirect: false
        }
        this.addThing = this.addThing.bind(this)
        this.delThing = this.delThing.bind(this)
        this.delAll = this.delAll.bind(this)
        this.buyThings = this.buyThings.bind(this)
    }

    addThing(thing) {
        let cart = cookies.get('cart')
        if (cart){
            cart.push(thing)
        }
        else {
            cart = [thing]
        }
        cookies.set('cart', cart, { path: '/' });
        this.setState({cart: cookies.get('cart')})
    }

    delThing(thing) {
        let cart = cookies.get('cart')
        if (cart){
            cart = cart.filter((item) => {
                return item !== thing;
            })
            cookies.set('cart', cart, { path: '/' });
            this.setState({cart: cookies.get('cart')})
        }
    }

    delAll(){
        cookies.set('cart', [], { path: '/' });
        this.setState({cart: cookies.get('cart')})
    }

    buyThings(){
        fetch('http://localhost:3500/buy', {method: 'POST', redirect: 'manual', credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "products": cookies.get('cart')
            })
        }).then(response => {
            cookies.set('cart', [], { path: '/' });
            this.setState({cart: cookies.get('cart')})
            this.setState({redirect: true})
        }).catch(function(err) {
            console.info(err);
        });

    }

    componentDidMount() {
        fetch('http://localhost:3500/products', {method: 'GET', credentials: 'include'}).then(res => res.json())
            .then((result) => {this.setState({things: result})})
            .then(() => {
                let bought = this.state.cart.filter(e => {
                    return !this.state.things.find(x => x.id === e);
                })
                if (bought.length > 0){
                    alert('Some items you selected are already bought')
                    let cart = cookies.get('cart')
                    cart = cart.filter((item) => {
                        return !bought.includes(item)
                    })
                    cookies.set('cart', cart, { path: '/' });
                    this.setState({cart: cookies.get('cart')})
                }
            })
    }


    render() {
        const things = this.state.things.filter((thing) => {
            let disp
            if (!this.state.cart) disp =  true
            else disp = !this.state.cart.find((elem) => elem === thing.id)
            return (this.props.isCart) ? !disp : disp

        }).map(thing => <Thing key={thing.id} thing={thing} addThing={this.addThing} delThing={this.delThing} isCart={this.props.isCart}/>)
        return (this.props.isCart)
            ? (
            <div>
                {(this.state.redirect) ? <Redirect to={'/purchase/status'}/> : null}
                <ListGroup>
                    {things}
                </ListGroup>
                <CartControl delAll={this.delAll} buyThings={this.buyThings} />
            </div>
            )
            : (
            <div>
                <ListGroup>
                    {things}
                </ListGroup>
            </div>
            )
    }
}

export default Things;