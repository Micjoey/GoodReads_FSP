import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom'
import { IndivRating } from '../stars/star';
import { formatDate, formatDateWithDay } from '../../util/date_util';



function FilterShelves(currentUsersPersonalShelves, handleDeleteShelf) {
    return (
        <div className="index-shelves-main-shelves"> 
            <div className="index-shelves-main-shelves-nav-bar">
                <div className="index-shelves-shelf-name"> Cover </div>
                <div className="index-shelves-title"> Title </div>
                <div className="index-shelves-author"> Author </div>
                <div className="index-shelves-avg-rating"> Avg Rating </div>
                <div className="index-shelves-date-added"> Date Added </div>
                <div className="index-shelves-date-read"> Has Read </div>
                <div className="index-shelves-date-read"> Delete </div>
            </div>
            <div className="index-shelves-books">
                <div className="index-shelves-books">
                    {currentUsersPersonalShelves.map((shelf, idx) => (
                        <div key={`${shelf}-${idx}`} className="index-shelves-bookshelf">
                            <div className="index-shelf-titles">
                                {shelf.bookshelf_title}
                                <button className="index-shelf-delete-button" type="button"
                                    onClick={() => handleDeleteShelf(shelf)} >Delete Shelf</button>
                            </div>
                            <div className="index-shelf-book-information">
                                {shelf.books.map((book, i) => (
                                    <div key={`${shelf}-${book}-${i}`} className="index-shelf-book-indiv-info">
                                        <div className="index-shelf-book-cover">
                                            <Link to={`/book/${book.id}`}>
                                                <div className="index-shelf-book-cover">
                                                    <img src={book.photo} className="index-shelf-book-cover" />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="index-shelf-book-title">
                                            <Link className="index-shelf-book-title" to={`/book/${book.id}`}>
                                                {book.title}
                                            </Link>
                                        </div>
                                        <div className="index-shelf-book-author">{book.author}</div>
                                        <div className="index-shelf-book-rating-container">
                                            <IndivRating min={1} max={5}
                                                value={book.average_rating}
                                            />
                                        </div>

                                        <div className="index-shelf-book-added">{formatDateWithDay(shelf.shelfBooks[i].updated_at)}</div>
                                        <div className="index-shelf-book-added">
                                            {(book.date_read) ?
                                                <img src={images.checkBook} className="checkBook" alt="" /> :
                                                <div>Hasn't Read</div>
                                            }
                                        </div>
                                        <div>
                                            <button key={i} className="add-shelves-sidebar-shelf-buttons"
                                                onClick={() => {
                                                    this.props.removeBook(
                                                        { shelf_id: shelf.id, book_id: book.id, id: currentUsersPersonalShelves[idx].shelfBooks[i].id }
                                                    ).then(() => window.location.reload())
                                                }
                                                }
                                            >Remove Book</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FilterShelves

