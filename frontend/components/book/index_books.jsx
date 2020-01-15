import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom'
import ShowBookContainer from './show_book_container';

class IndexBook extends React.Component {
    constructor(props) {
        super(props)
        this.showBook = this.showBook.bind(this);
    }

    componentDidMount() {
        this.props.retrieveBooks()
    }



    showBook(id) {
        return (
        <Redirect to={`/book/${id}`}/>   
        )    
    }

    render() {
        
        if (!this.props.books) return null;
        const books = (
                <div className="index-books">
                    {this.props.books.map((book, i) => (
                        <div key={`book-${i}`} className="index-books-book-info">
                            <div className='dropdown-book'>
                            <Link to={`/book/${i+1}`}>
                                <div className="index-book-covers"><img src={book.photo} className="index-book-cover"/></div>
                            </Link>
                            </div>
                            <div className="dropdown-book-content">
                                <div className='index-book-information-title'>{book.title}</div>
                                <div className='index-book-information-author'>by: {book.author}</div>
                                <div className='index-book-information-rating'>Rating: {book.average_rating}</div>
                                <div className='index-book-information-genre'>Genre: {book.genre}</div>
                                <div className='index-book-information-description'>Description: {book.description} </div>
                            </div>
                        </div>
                    ))}
                </div>
            )
        return (
                <div className="index-book-information"> 
                  {books}
                </div>
        )
        
    }

}


export default IndexBook







