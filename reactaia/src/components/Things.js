import React, {Component} from 'react';
import thingsList from "../ThingsList";
import Thing from "./Thing";
import {ListGroup} from "react-bootstrap";
import AddForm from "./AddForm";
import Sort from "./Sort";
import Search from "./Search";

class Things extends Component {
    constructor(props) {
        super(props);
        this.state = {
            things: thingsList,
            howsort: 'id',
            ascdesc: 'asc',
            search: ''
        }

        this.handleDelet = this.handleDelet.bind(this)
        this.addThing = this.addThing.bind(this)
        this.changeScore = this.changeScore.bind(this)
        this.sortThings = this.sortThings.bind(this)
        this.compareValues = this.compareValues.bind(this)
        this.changeSort = this.changeSort.bind(this)
    }

    changeSort(event, wha) {
        const val = event.target.value
        this.setState(prevState => {
            return {
                ...prevState,
                [wha]: val
            }
        }, () => {this.sortThings(this.state.howsort, this.state.ascdesc)})
    }

    handleDelet(id) {
        this.setState(prevState => {
            const updatedThings = prevState.things.filter(function (value) {
                return value.id !== id;
            })
            return {
                ...prevState,
                things: updatedThings
            }
        })
    }

    addThing(thing) {
        this.setState(prevState => {
            return {
                ...prevState,
                things: [
                    ...prevState.things,
                    {
                        id: Math.max.apply(Math, prevState.things.map(function(o) { return o.id; })) + 1,
                        ...thing
                    }
                ]
            }
        }, () => {this.sortThings(this.state.howsort, this.state.ascdesc)})
    }

    changeScore(event, id) {
        const val = event.target.value
        this.setState(prevState => {
            const updatedThings = prevState.things.map(thing => {
                if (thing.id === id) {
                    return {
                        ...thing,
                        score: val
                    }
                }
                return thing
            })
            return {
                ...prevState,
                things: updatedThings
            }
        }, () => {this.sortThings(this.state.howsort, this.state.ascdesc)})
    }

    compareValues(key, order) {
        return function innerSort(a, b) {
            const a2 = (key === 'score') ? parseInt(a[key]) : a[key]
            const b2 = (key === 'score') ? parseInt(b[key]) : b[key]
            let comparison = 0;
            if (a2 > b2) {
                comparison = 1;
            } else if (a2 < b2) {
                comparison = -1;
            }
            return (
                (order === 'desc') ? (comparison * -1) : comparison
            )
        }
    }

    sortThings(key, order) {
        this.setState(prevState => {
            return {
                ...prevState,
                things: prevState.things.sort(this.compareValues(key, order))
            }
        })
    }

    componentDidMount() {
        this.sortThings(this.state.howsort, this.state.ascdesc)
    }

    render() {
        const things = this.state.things.filter(
            (thing) => {
                if (this.state.search === "") return true
                return thing.name.toLowerCase().includes(this.state.search.toLowerCase())
            }
        ).map(thing => <Thing key={thing.id} thing={thing} deletHandler={this.handleDelet} changeScore={this.changeScore}/>)
        return (
            <div>
                <Search search={this.state.search} changeSort={this.changeSort}/>
                <Sort howsort={this.state.howsort} ascdesc={this.state.ascdesc} changeSort={this.changeSort}/>
                <AddForm addThing={this.addThing}/>
                <ListGroup>
                    {things}
                </ListGroup>
            </div>
        );
    }
}

export default Things;