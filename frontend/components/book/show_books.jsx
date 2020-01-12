import React from 'react';
import {link, Redirect} from 'react-router-dom'

class showBook extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.retrieveBook(this.props.id)
    }

    render() {
        const books = (typeof this.props.books !== 'undefined') ? (
            <div className="index-book">
                HI
            </div>
        ) : (<p>Sorry! No Books!</p>)
    }

}

export default showBook

