import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom'
import { IndexBooksFilterBar } from './Index_books_filter_bar'
import ShowBookContainer from '../show_book/show_book_container';
import { IndivRating } from '../../stars/star';
class IndexBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookSearch: '',
            books: [],
            loaded: false,
        }
        this.showBook = this.showBook.bind(this);
    }


    componentDidMount() {
        const books = this.props.retrieveBooks()
        Promise.all([books]).then(() => this.setState({ loaded: true }))
    }

   

    showBook(id) {
        return (
        <Redirect to={`/book/${id}`}/>   
        )    
    }


    render() {
        if (!this.props.books) return null;
        let allBooks
        (this.state.books.length < 1) ? allBooks = this.props.books : allBooks = this.state.books
        // need to import books
        if (this.state.loaded) {
            return (
                <div className="index-books">
                    {allBooks.map((book, i) => (
                        // {this.props.books.map((book, i) => (
                        <div key={`book-${i}`} className="index-books-book-info">
                            <div className='dropdown-book'>
                                <Link to={`/book/${book.id}`}>
                                    <div className="index-book-covers">
                                        <img src={book.photo} className="index-book-cover" />
                                    </div>
                                </Link>
                            </div>
                            <Link to={`/book/${book.id}`} className="dropdown-book-content">
                                <div className='index-book-information-title'>{book.title}</div>
                                <div className='index-book-information-author'>by: {book.author}</div>
                                <div className='index-book-information-rating'>Rating: {book.average_rating}</div>
                                <div className='index-book-information-rating'>
                                    <IndivRating min={1} max={5}
                                        value={book.average_rating}
                                    />
                                </div>
                                <div className='index-book-information-genre'>Genre: {book.genre}</div>
                                {/* <div className='index-book-information-date-read'>Date Read: {book.date_read}</div> */}
                                <div className='index-book-information-date-read'>{(book.date_read) ?
                                    <div>Date Read: Has Read</div> :
                                    <div>Date Read: Hasn't Read</div>}
                                </div>
                                <div className='index-book-information-description'>
                                    <div> Book Description: </div>
                                    <div> {book.description} </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )
        } else {
            return (<div className="loading-page">
				<div className="loading-sections">
					<div className='loading-circle'>
                        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
					</div>
                    <div className='loading-text'>
                        <h1>Loading...If longer than 1 min, please refresh the page.</h1>
                    </div>
				</div>
			</div>)
        }
        
    }

}


export default IndexBook







