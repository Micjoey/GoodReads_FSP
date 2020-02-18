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
    }

    componentDidMount() {
        const shelvesMount = this.props.retrieveShelves()
        const bookMount = this.props.retrieveBook(this.props.match.params.bookId)
        Promise.all([shelvesMount, bookMount]).then(() => this.setState({ loaded: true }))
    }

    


    render() {
        if (this.state.loaded) {
        return (
        <div className="add-shelf">
            <button className="add-shelf-title">Add To A Shelf</button>
            <div className="add-shelf-content">
                    <div className="add-shelf-shelves">
                        {this.props.shelves.map((shelf, i) => (
                            <div key={`shelf-${i}`} className="add-shelves-sidebar-shelf">
                                <button className="add-shelves-sidebar-shelf-buttons" 
                                onClick={ () =>{
                                    this.props.addToShelf(
                                        {shelf_id: shelf.id, book_id: this.props.book.id}
                                        )
                                    } 
                                }
                                >
                                    <ul className={`add-shelves-sidebar-shelf-button`}>
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
            return (<div>Loading</div>)
        }
    }
}


export default withRouter(AddShelf)
