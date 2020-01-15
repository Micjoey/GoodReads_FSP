import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { formatDate, formatDateWithDay } from '../../util/date_util';

class IndexShelves extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.retrieveShelves()
    }

    hasRead(book) {
        <div>
            (book.date_read) ?
        </div>
    }

    
    render(){
        console.log(this.props.shelves)
        if(!this.props.shelves) return null;
        return (
            <div className="index-shelves-main">
                <div className="index-shelves-main-navbar">
                    <p className="index-shelves-main-navbar-mybooks">My Books</p>
                    <h2>Search Bar Placeholder</h2>
                </div>
                <div className="index-shelves-main-inner">
                    <div className="index-shelves-main-content">
                        <div className="index-shelves-main-sidebar">
                            <div className="index-shelves-sidebar-list-shelves">
                                <p className="index-shelves-sidebar-title">Bookshelves</p>
                                {this.props.shelves.map((shelf, i) => (
                                    <div key={`shelf-${i}`} className="index-shelves-sidebar-shelf">
                                        <button className="index-shelves-sidebar-shelf-buttons">
                                            <ul className={`index-shelves-sidebar-shelf-button-${shelf.bookshelf_title}`}>
                                                {shelf.bookshelf_title}
                                            </ul>
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <button className="index-shelves-main-sidebar-add-shelf-button">Add Shelf</button>
                        </div>
                        <div className="index-shelves-main-shelves">
                            <div className="index-shelves-main-shelves-nav-bar">
                                <div className="index-shelves-shelf-name"> Shelf Name/Cover </div>
                                {/* <div className="index-shelves-cover"> Cover </div> */}
                                <div className="index-shelves-title"> Title </div>
                                <div className="index-shelves-author"> Author </div>
                                <div className="index-shelves-avg-rating"> Avg Rating </div>
                                <div className="index-shelves-my-rating"> My Rating </div>
                                <div className="index-shelves-date-added"> Date Added </div>
                                <div className="index-shelves-date-read"> Date Read </div>
                            </div>
                            <div className="index-shelves-books"> 
                                    {this.props.shelves.map((shelf,i)=>(
                                        <div key={`shelf-${i}-${i}`} className="index-shelves-bookshelf">
                                               <div className="index-shelf-titles"> {shelf.bookshelf_title} </div>
                                               <div className="index-shelf-book-information"> 
                                                   {shelf.books.map((book, i)=> (
                                                       <div key={`${shelf}-${book}-${i}`} className="index-shelf-book-indiv-info"> 
                                                            <div className="index-shelf-book-cover">
                                                                <img src={book.photo} className="index-shelf-book-cover" />
                                                            </div>
                                                            <div className="index-shelf-book-title">{book.title}</div>
                                                            <div className="index-shelf-book-author">{book.author}</div>
                                                           <div className="index-shelf-book-avg-rating">{book.average_rating}</div>
                                                           <div className="index-shelf-book-user-rating">User Rating</div>
                                                           <div className="index-shelf-book-added">{formatDateWithDay(book.created_at)}</div>                                                        
                                                           <div className="index-shelf-book-added">{formatDateWithDay(book.date_read)}</div>                                                        
                                                       </div>
                                                   ))}
                                               </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



}

export default (IndexShelves)

