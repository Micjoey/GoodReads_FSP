import React from 'react';
import { Link } from 'react-router-dom'
import { IndivRating } from '../../stars/star';


function IndexBooks(allBooks) {
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
}

export default IndexBooks

