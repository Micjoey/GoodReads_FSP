import React from 'react';
import {link, Redirect} from 'react-router-dom'

class showBook extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(id) {
        this.props.retrieveBook(id)
    }

    render() {
        const books = (this.props.books.length !== 0) ? (
            <div className="index-books">
                {this.props.books.map((book, i) => (
                    // <ul className="index-books" key={`book-${i}`}>
                    //     <ul className="index-books-book-info"><img src={book_cover[i]} className="index-book-covers" alt="" />{book.title}, {book.author}</ul>
                    // </ul>
                    <div key={`book-${i}`} className="index-books-book-info">
                        <img src={book_cover[i]} className="index-book-covers" alt="" />
                        <div className='index-book-information-title'>{book.title} by,</div>
                        <div className='index-book-information-author'>{book.author}</div>
                    </div>
                ))}
            </div>
        ) : (<p>Sorry! No Books!</p>)
    }

}

export default showBook

