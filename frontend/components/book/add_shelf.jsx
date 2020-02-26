import React from 'react';
import { link, Redirect, withRouter } from 'react-router-dom'
import { formatDateWithDay } from '../../util/date_util';
import ShelfFormContainer from '../shelf/shelf_form_container'

class AddShelf extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
        this.addShelf = this.addShelf.bind(this)
        this.toggleSelectedShelves = this.toggleSelectedShelves.bind(this)
        this.removeShelf = this.removeShelf.bind(this)
    }

    componentDidMount() {
        const shelvesMount = this.props.retrieveShelves()
        const bookMount = this.props.retrieveBook(this.props.match.params.bookId)
        Promise.all([shelvesMount, bookMount]).then(() => this.setState({ loaded: true }))
    }


    addShelf(shelf) {
        this.props.addToShelf(
            { shelf_id: shelf.id, book_id: this.props.book.id }
        )
    }

    removeShelf(shelf, shelfName, i) {
        debugger
        const book = this.props.book
        const onshelfid = book.onshelfbooks.filter(shelf => shelf.shelf_id === shelf.id).id
        if (document.getElementById(`${shelfName}`)) {
            debugger
            this.props.removeBook(
                { shelf_id: shelf.id, book_id: book.id, id: onshelfid }
            )
        }
    }

    toggleSelectedShelves() {
        // debugger
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
            // Book has unique shelves, if i can check if its on the shelf then I can grab by id and toggle
            this.toggleSelectedShelves()

            return (
            <div className="add-shelf">
                <button className="add-shelf-title">Add To A Shelf</button>
                <div className="add-shelf-content">
                        <div className="add-shelf-shelves">
                            {this.props.shelves.map((shelf, i) => (
                                <div key={`shelf-${i}`} className="add-shelves-sidebar-shelf">
                                    <button className="add-shelves-sidebar-shelf-buttons" 
                                        onClick={() => document.getElementById(`${shelf.bookshelf_title}`).name === "checked"
                                        ? this.removeShelf(shelf, `${shelf.bookshelf_title}`, i) 
                                        : this.addShelf(shelf)}
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
