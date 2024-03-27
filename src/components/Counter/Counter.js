import React from "react";

export default class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {count: this.props.initialCount}
    }   

    incrementHandler = () => {
        this.setState((state) => ({count: state.count + 1}))
    }

    decrementHandler = () => {
        this.setState((state) => ({count: state.count - 1}))
    }
    multiplyByTwoHandler = () => {
        this.setState((state) => ({count: state.count * 2}))
    }

    render() {
        return <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.incrementHandler.bind(this)}>Increment By 1</button>
            <button onClick={this.decrementHandler.bind(this)}>Decrement By 1</button>
            <button onClick={this.multiplyByTwoHandler}>Multiply by 2</button>
        </div>
    }
}

Button.defaultProps = {
    initialCount: 10,
}