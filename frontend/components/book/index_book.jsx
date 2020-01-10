import React from 'react';
import { link, Redirect } from 'react-router-dom'

class indexBook extends React.Component {
    constructor(props) {
        super(props)

    }

    

    render() {
        // debugger
        const books = (this.props.books) ? (
                <ul>
                    {this.props.books.map((book, i) => (
                        <ul className="all-books" key={`book-{i}`}>
                            {book}
                        </ul>
                    ))}
                </ul>
            ) : (<p>Sorry! No Books!</p>)
        return (
                <div className="test"> 
                  {books}
                </div>
        )
    }

}

export default indexBook