import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { formatDate, formatDateWithDay } from '../../util/date_util';
import ShelfFormContainer from './shelf_form_container';
import FilterShelves from './filter_Shelves'



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
            this.setState({shelf: currentUsersPersonalShelves}) } 
        else {
            this.setState({shelf: this.props.retrieveBooks()})
            // this.setState({shelf: this.props.retrieveBooks()})
        }

    }

    handleDeleteShelf(shelf) {
        this.props.deleteShelf(shelf.id)
    }

    
    render(){
        if(!this.props.shelves) return null;
        const currentUsersPersonalShelves = (this.state.shelf.length > 0) ? this.state.shelf : this.props.shelves
        const allShelves = this.props.shelves
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
                                {allShelves.map((shelf, i) => (
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
                        {FilterShelves(currentUsersPersonalShelves, this.handleDeleteShelf, this.props.removeBook)}
                    </div>
                </div>
            </div>
        )
    }



}

export default (IndexShelves)

