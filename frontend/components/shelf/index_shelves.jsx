import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { formatDate, formatDateWithDay } from '../../util/date_util';
import ShelfFormContainer from './shelf_form_container';
import IndexShelvesContainer from './index_shelves_container';

class IndexShelves extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.retrieveShelves()
        this.props.retrieveBooks()
    }

    handleSubmit(e) {
        e.preventDefault();
        const shelf = Object.assign({}, this.state)
        this.props.createShelf(shelf);
    }

    
    render(){
        // debugger
        if(!this.props.shelves) return null;
        return (
            <div className="index-shelves-main">
                <div className="index-shelves-main-navbar">
                    <p className="index-shelves-main-navbar-myshelves">My Shelves</p>
                    <h2 className='index-shelves-search'>Search Bar Placeholder</h2>
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
                            <div>
                            <ShelfFormContainer />
                            </div>
                        </div>
                        <div className="index-shelves-main-shelves">
                            <div className="index-shelves-main-shelves-nav-bar">
                                <div className="index-shelves-shelf-name"> Shelf Name/Cover </div>
                                <div className="index-shelves-title"> Title </div>
                                <div className="index-shelves-author"> Author </div>
                                <div className="index-shelves-avg-rating"> Avg Rating </div>
                                <div className="index-shelves-my-rating"> My Rating </div>
                                <div className="index-shelves-date-added"> Date Added </div>
                                <div className="index-shelves-date-read"> Date Read </div>
                            </div>
                            <div className="index-shelves-books"> 
                                    {this.props.shelves.map((shelf, idx)=>(
                                        <div key={`${shelf}-${idx}`} className="index-shelves-bookshelf">
                                               <div className="index-shelf-titles"> 
                                                    {shelf.bookshelf_title}    
                                                <button className="index-shelf-delete-button" type="button" 
                                                onClick={() => {this.props.deleteShelf(shelf.id)}} >Delete Shelf</button>
                                               </div>
                                               <div className="index-shelf-book-information"> 
                                                   {shelf.books.map((book, i)=> (
                                                       <div key={`${shelf}-${book}-${i}`} className="index-shelf-book-indiv-info"> 
                                                            <div className="index-shelf-book-cover">
                                                                <Link to={`/book/${book.id}`}>
                                                               <div className="index-shelf-book-cover"><img src={book.photo} className="index-shelf-book-cover" /></div>
                                                                </Link>
                                                            </div>
                                                            <div className="index-shelf-book-title">
                                                               <Link className="index-shelf-book-title" to={`/book/${book.id}`}>
                                                                {book.title}
                                                               </Link>
                                                            </div>
                                                            <div className="index-shelf-book-author">{book.author}</div>
                                                            <div className="index-shelf-book-rating-container">
                                                                <div className="index-shelf-book-avg-rating">{book.average_rating}</div>
                                                           </div>
                                                           <div className="index-shelf-book-rating-container">
                                                                <div className="index-shelf-book-user-rating">{book.rating}</div>
                                                            </div>
                                                           <div className="index-shelf-book-added">{formatDateWithDay(book.created_at)}</div>                                                        
                                                           <div className="index-shelf-book-added">
                                                               {(book.date_read) ? 
                                                               formatDateWithDay(book.date_read) :
                                                               <div>Hasn't Read</div>
                                                               }
                                                            </div>
                                                            <div>
                                                               <button key={i}className="add-shelves-sidebar-shelf-buttons"
                                                                   onClick={() => {
                                                                       this.props.removeBook(
                                                                           { shelf_id: shelf.id, book_id: book.id, id: this.props.shelves[idx].shelfBooks[i].id }
                                                                       )
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
                </div>
            </div>
        )
    }



}

export default (IndexShelves)

