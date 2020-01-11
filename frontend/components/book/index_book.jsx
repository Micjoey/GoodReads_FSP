import React from 'react';
import { link, Redirect } from 'react-router-dom'

class IndexBook extends React.Component {
    constructor(props) {
        super(props)
        
    }

    componentDidMount() {
        this.props.retrieveBooks()
    }

    render() {
        const books = (this.props.books.length !== 0) ? (
                <ul>
                    {this.props.books.map((book, i) => (
                        <ul className="all-books" key={`book-${i}`}>
                            <ul>{book.title}, {book.author}</ul>
                            <ul></ul>
                                    
                        </ul>
                    ))}
                </ul>
            ) : (<p>Sorry! No Books!</p>)
        return (
                <div className="all-book-information"> 
                  {books}
                </div>
        )
        
    }

}

export default IndexBook