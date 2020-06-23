import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    createCoordinates = (e) => {
        const array = [e.clientX, e.clientY];
        this.props.onReceiveCoordinates(array)
    }

    render() {
        return (
            <button onClick={this.createCoordinates}>
                Coordinates
            </button>
        )
    }
}
