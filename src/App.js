import React, { Component } from 'react';

import './App.css';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            thingList: [
                { name: 'Coffee'},
                { name: 'Biscuit'},
                { name: 'Tea'},
                { name: 'Bread'}
            ]
        }
        this.onCreated = this.onCreated.bind(this);
    }

    onCreated(thing) {
        const things = [...this.state.things, thing];
        thing.id = things.length
        this.setState({ things })
    }

    render() {
        return (
            <div className="App">
                <Header thingCount={this.state.things.length} />
                <ThingList things={this.state.things} onCreated={this.onCreated} />
                <Footer />
            </div>
        )
    }
}

function Header(props) {
    return <h2> Total Number of Things: {props.thingCount} </h2>
}

class ThingList extends Component {
    render() {
        return(
            <div>
            <ThingForm onCreated={this.props.onCreated} />
            <ul>
                {this.props.things.map(thing => (
                    <ThingItem key={thing.id} name={thing.name} />
                    ))}
            </ul>
            </div>
        )
    }
}

class ThingForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onCreated(this.state);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

function ThingItem(props) {
    return <li>{props.name}</li>
}

function Footer() {
    return <h2> That's all the things folks! See ya next time!</h2>
}

export default App;
