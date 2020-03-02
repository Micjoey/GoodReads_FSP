import React from 'react';
import { link, Redirect, withRouter } from 'react-router-dom'
import { formatDateWithDay } from '../../util/date_util';
import ShelfFormContainer from '../shelf/shelf_form_container'

class AddShelf extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            switch: '',
            book: [],
        }
        this.addShelf = this.addShelf.bind(this)
        this.toggleSelectedShelves = this.toggleSelectedShelves.bind(this)
        this.removeShelf = this.removeShelf.bind(this)
        this.handleShelf = this.handleShelf.bind(this)
    }

    componentDidMount() {
        const shelvesMount = this.props.retrieveShelves()
        const bookMount = this.props.retrieveBook(this.props.match.params.bookId)
        Promise.all([shelvesMount, bookMount]).then(() => this.setState({ loaded: true }))
    }





    addShelf(shelf) {
        const book = this.props.book
        this.props.addToShelf(
            { shelf_id: shelf.id, book_id: book.id }
        ).then(() => this.props.retrieveBook(book.id))
        let styling = document.getElementById(`${shelf.bookshelf_title}`)
        styling.classList.add('filtered')
        styling.setAttribute('name', 'checked')
    }

    removeShelf(shelf, shelfName) {
        const shelfId = shelf.id
        const book = this.props.book
        const onshelfId = shelf.shelfBooks.filter(shelf => shelf.shelf_id === shelfId && shelf.book_id === book.id)[0]
        let styling = document.getElementById(`${shelfName}`)
        if (onshelfId && styling.name) {
            this.props.removeBook(
                { shelf_id: shelf.id, book_id: book.id, id: onshelfId.id }
                ).then(() => this.toggleSelectedShelves()).then(() => this.addShelf())
            }
    }

    handleShelf(shelf, shelfName) {
        const shelfId = shelf.id
        const book = this.props.book
        const onshelfId = shelf.shelfBooks.filter(shelf => shelf.shelf_id === shelfId && shelf.book_id === book.id)[0]
        // onshelfId ? this.removeShelf(shelf, shelfName) : this.addShelf(shelf)
        this.addShelf(shelf)
    }

    toggleSelectedShelves() {
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
            }
            )
    }
    

    
    render() {
        if (this.state.loaded) {
            this.toggleSelectedShelves()
            return (
            <div className="add-shelf">
                <button className="add-shelf-title">Add To A Shelf</button>
                <div className="add-shelf-content">
                        <div className="add-shelf-shelves">
                            {this.props.shelves.map((shelf, i) => (
                                <div key={`shelf-${i}`} className="add-shelves-sidebar-shelf">
                                    <button className="add-shelves-sidebar-shelf-buttons" 
                                        onClick={() => this.handleShelf(shelf, `${shelf.bookshelf_title}`, i)}
                                    id={`${shelf.bookshelf_title}`}
                                    >
                                        <ul className={`add-shelves-sidebar-shelf-button`} >
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
            return (<div className="loading-page">
                <div className="loading-sections">
                    <div>
                        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                        <span className="sr-only">Loading...If longer than 1 min, please refresh the page.</span>
                    </div>
                </div>
            </div>)
        }
    }
}


export default withRouter(AddShelf)
