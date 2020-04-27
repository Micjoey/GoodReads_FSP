import React from 'react';
import { link, Redirect, withRouter } from 'react-router-dom'
import { formatDateWithDay } from '../../util/date_util';
import ShelfFormContainer from './shelf_form_container'
import LoadingScreen from '../misc/loading_screen';
import ToggleColoring from '../misc/toggle_coloring';


class AddShelf extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            switch: '',
            book: [],
            bookInfo: this.props.book,
        }
        this.addToShelf = this.addToShelf.bind(this)
        this.firstColorOnShelfBooks = this.firstColorOnShelfBooks.bind(this)
        this.removeShelf = this.removeShelf.bind(this)
        this.handleShelf = this.handleShelf.bind(this)

    }

    componentDidMount() {
        const shelvesMount = this.props.retrieveShelves()
        Promise.all([shelvesMount]).then(() => this.setState({ loaded: true }))
    }


    addToShelf(shelf) {
        const book = this.props.book
        this.props.addToShelf(
            { shelf_id: shelf.id, book_id: book.id }
        )
        
    }

    removeShelf(shelf, shelfName) {
        const shelfId = shelf.id
        const book = this.props.book
        const onshelfId = shelf.shelfBooks.filter(shelf => shelf.shelf_id === shelfId && shelf.book_id === book.id)[0]
        let styling = document.getElementById(`${shelf.bookshelf_title}`)
        if (onshelfId && styling.name) {
            this.props.removeBook(
                { shelf_id: shelf.id, book_id: book.id, id: onshelfId.id }
                )// removes the book from the shelf
                .then(() => ToggleColoring(shelf)) //switches the shelf from checked to uncheck
                .then(() => this.props.retrieveBook(this.props.match.params.bookId))
            }
    }

    handleShelf(shelf, shelfName, i, book) {
        const shelfId = shelf.id
        const onShelfId = shelf.shelfBooks.filter(shelf => shelf.shelf_id === shelfId && shelf.book_id === book.id)[0]
        onShelfId ? this.removeShelf(shelf, shelfName) : this.addToShelf(shelf)
    }

    firstColorOnShelfBooks() {
        const book = this.props.book
        book.unique_shelves.forEach(indivShelf => {
            let styling = document.getElementById(`${indivShelf.bookshelf_title}`)
            let indivShelfEle = document.getElementById(indivShelf.bookshelf_title)
            if (indivShelfEle) {
                if (indivShelf.user_id === this.props.currentUser.id) {
                    styling.classList.add('filtered')
                    styling.setAttribute('name', 'checked')
                } 
            } 
        })
    }
    

    
    render() {
        const book = this.props.book
        if (this.state.loaded) {
            this.firstColorOnShelfBooks()
            return (
            <div className="add-shelf">
                <button className="add-shelf-title">Add To A Shelf</button>
                <div className="add-shelf-content">
                        <div className="add-shelf-shelves">
                            {this.props.shelves.map((shelf, i) => (
                                <div key={`shelf-${i}`} className="add-shelves-sidebar-shelf">
                                    <button className="add-shelves-sidebar-shelf-buttons" 
                                        onClick={() => this.handleShelf(shelf, `${shelf.bookshelf_title}`, i, book)}
                                    id={`${shelf.bookshelf_title}`}
                                    >
                                        <ul className={`add-shelves-sidebar-shelf-buttons`} >
                                            {shelf.bookshelf_title}
                                        </ul>
                                    </button>
                                </div>
                            ))}
                            <div className="add-shelf-form">
                                <ShelfFormContainer className="add-shelf-form-container"/>
                            </div>
                        </div>
                </div>
            </div>
        )} else {
            return (
                <div>
                    {LoadingScreen()}
                </div>
            )
        }
    }
}


export default withRouter(AddShelf)
