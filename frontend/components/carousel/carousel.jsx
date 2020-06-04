import React, { Component } from 'react'


class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            index: 0,

        }
        this.left = this.left.bind(this)
        this.right = this.right.bind(this)
    }

    left() {

    }

    right() {

    }

    render () {
        return (
            <div>
                <div>Left</div>
                <div>Picture</div>
                <img src="https://github.com/Micjoey/FunReads_FSP/blob/116bdde2a66604a0c2bf475c850b9e479a0c8ad7/app/assets/images/All_you_have_to_do_is_ask.png" alt=""/>
                <div>Right</div>
            </div>
        )
    }

}

export default Carousel