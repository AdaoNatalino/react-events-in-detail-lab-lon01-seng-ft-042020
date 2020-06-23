import React, { Component } from 'react'

export default class DelayedButton extends Component {

    delayFunction = (e) => {
        // console.log("Before: ", e)
        e.persist();
        setTimeout(() => {
            // console.log("After: ", e)
            this.props.onDelayedClick(e)
        }, this.props.delay)
    }

    render() {
        return (
            <button onClick={this.delayFunction}>
                Delay
            </button>
        )
    }
}
