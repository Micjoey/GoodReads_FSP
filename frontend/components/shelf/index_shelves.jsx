import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { formatDate, formatDateWithDay } from '../../util/date_util';
import ShelfFormContainer from './shelf_form_container';
import { IndivRating } from '../stars/star';


class IndexShelves extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shelf: '',
            change: false,
        }
        this.handleDeleteShelf = this.handleDeleteShelf.bind(this)
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

    // onclick filter the shelves and set a new variable
    filterShelf(shelf) {
        let shelfName = shelf
        let styling = document.getElementById(`${shelfName}`)
        this.props.shelves.forEach(indivShelf => document.getElementById(indivShelf.bookshelf_title).classList.remove('filtered'))
        if (shelf !== 'All Books') {
            let currentUsersPersonalShelves = this.props.shelves.filter(indivShelf => shelfName === indivShelf.bookshelf_title)
            styling.classList.add('filtered')
        this.setState({shelf: currentUsersPersonalShelves}) } else {
            this.setState({shelf: this.props.retrieveBooks()})
            // this.setState({shelf: this.props.retrieveBooks()})
        }

    }

    handleDeleteShelf(shelf) {
        this.props.deleteShelf(shelf.id)
         window.location.reload()
    }

    
    render(){
        if(!this.props.shelves) return null;
        let currentUsersPersonalShelves = (this.state.shelf.length > 0) ? this.state.shelf : this.props.shelves
        debugger
        return (
            <div className="index-shelves-main">
                <div className="index-shelves-main-navbar">
                    <p className="index-shelves-main-navbar-myshelves">My Shelves</p>
                </div>
                <div className="index-shelves-main-inner">
                    <div className="index-shelves-main-content">
                        <div className="index-shelves-main-sidebar">
                            <div className="index-shelves-sidebar-list-shelves">
                                <p className="index-shelves-sidebar-title">Bookshelves</p>
                                <button className="index-shelves-sidebar-shelf-buttons" id={`'All Books'`} onClick={() => this.filterShelf('All Books')}>
                                    All Books
                                </button>
                                {this.props.shelves.map((shelf, i) => (
                                    <div key={`shelf-${i}`} className="index-shelves-sidebar-shelf">
                                        <button className="index-shelves-sidebar-shelf-buttons" id={`${shelf.bookshelf_title}`} onClick={()=>this.filterShelf(shelf.bookshelf_title)}>
                                            <ul className={`index-shelves-sidebar-shelf-button-${shelf.bookshelf_title}`} >
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
                                <div className="index-shelves-shelf-name"> Cover </div>
                                <div className="index-shelves-title"> Title </div>
                                <div className="index-shelves-author"> Author </div>
                                <div className="index-shelves-avg-rating"> Avg Rating </div>
                                <div className="index-shelves-date-added"> Date Added </div>
                                <div className="index-shelves-date-read"> Has Read </div>
                                <div className="index-shelves-date-read"> Delete </div>
                            </div>
                            <div className="index-shelves-books"> 

                                    {currentUsersPersonalShelves.map((shelf, idx)=>(
                                        <div key={`${shelf}-${idx}`} className="index-shelves-bookshelf">
                                               <div className="index-shelf-titles"> 
                                                    {shelf.bookshelf_title}    
                                                <button className="index-shelf-delete-button" type="button" 
                                                onClick={() => this.handleDeleteShelf(shelf)} >Delete Shelf</button>
                                               </div>
                                               <div className="index-shelf-book-information"> 
                                                   {shelf.books.map((book, i)=> (
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
                                                               <button key={i}className="add-shelves-sidebar-shelf-buttons"
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
                </div>
            </div>
        )
    }



}

export default (IndexShelves)

