import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { openModal } from '../../actions/model_actions';




class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookSearch: '',
            books: [],
            loaded: false,
        }
        this.dropDownToggle = this.dropDownToggle.bind(this)
        this.clearState = this.clearState.bind(this)
    }

    // If the search is longer than 0, then toggle dropdown and map over the books showing what is available

    dropDownToggle() {
        if (allBooks.length > 0) {
            document.getElementsByClassName("nav-bar-search-book-dropdown")[0].style.display = 'block'
        } else {
            document.getElementsByClassName("nav-bar-search-book-dropdown")[0].style.display = 'none'
 
        }
    }

    


    componentDidMount() {
    //    const bookMount = this.props.retrieveBooks()
        // Promise.all([bookMount]).then(() => this.setState({ loaded: true }))
    }

   




    filterBooks() {
        this.props.retrieveBooks()
        let bookSearch = this.state.bookSearch.toLowerCase()
        let allBooks = this.props.books.filter(indivBook =>
            indivBook.title.toLowerCase().includes(bookSearch) ||
            indivBook.author.toLowerCase().includes(bookSearch) ||
            indivBook.genre.toLowerCase().includes(bookSearch)
        ).map(indivBook => indivBook)
        if (allBooks.length === 0 || bookSearch.length === 0) {
            this.setState({ books: []})
            this.setState({ books: allBooks })
        }
        
        if (this.state.bookSearch.length > 0) {
            document.getElementsByClassName("nav-bar-search-book-dropdown")[0].style.display = 'block'
        } else {
            document.getElementsByClassName("nav-bar-search-book-dropdown")[0].style.display = 'none'
        }

    }

    updateState(text) {
        this.setState({ bookSearch: text, books: this.props.books }, () => this.filterBooks())
    }

    clearState() {
        this.setState({ bookSearch: ''}, () => document.getElementsByClassName("nav-bar-search-book-dropdown")[0].style.display = 'none')
    }

    

    render() {
        return (
            <div>
                <div className='nav-bar-search'>
                    <form className="nav-bar-search-bar">
                        <input type="text"
                            className="nav-bar-search-bar-text"
                            placeholder="Search For Book"
                            onChange={text => this.updateState(
                                text.target.value
                            )}
                            value={this.state.bookSearch}
                        />
                    </form>
                </div>
                <div className='nav-bar-search-book-dropdown'>
                    {this.state.books.map((book, i) => (
                        // {this.props.books.map((book, i) => (
                        <div key={`book-${i}`} className="search-bar-book-info">
                            <div className='dropdown-book'>
                                <Link to={`/book/${book.id}`} onClick={() => this.clearState()}>
                                    <div className="search-bar-covers" >
                                        <img src={book.photo} className="search-bar-cover" />
                                        <div className='search-bar-box'>
                                            <div className='search-bar-information-title'>{book.title}</div>
                                            <div className='search-bar-book-information-author'>by: {book.author}</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        ) 
    } 
    
}


export default (SearchBar);
