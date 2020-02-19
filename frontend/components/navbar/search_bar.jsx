import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import GreetingContainer from '../greeting/greeting_container';
import SignUpFormContainer from '../session_form/signup_form_container';
import LogInFormContainer from '../session_form/login_form_container';
import LoggedInContainer from '../greeting/logged_in_container'
import { openModal } from '../../actions/model_actions';




class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookSearch: '',
            books: [],
        }
        this.dropDownToggle = this.dropDownToggle.bind(this)
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
        this.props.retrieveBooks()
    }




    filterBooks() {
        let allBooks = this.props.books.filter(indivBook =>
            indivBook.title.toLowerCase().includes(this.state.bookSearch.toLowerCase()) ||
            indivBook.author.toLowerCase().includes(this.state.bookSearch.toLowerCase()) ||
            indivBook.genre.toLowerCase().includes(this.state.bookSearch.toLowerCase())
        ).map(indivBook => indivBook)
        // let notfound = images.notFound;
        if (this.state.bookSearch < 1) {
            // this.state.books.push({title: 'Not Found', photo: notfound})
            this.setState({ books: this.props.books, bookSearch: '' })
        } else {
            // console.log('updating list of books', allBooks);
            const setting = this.setState({ books: allBooks })
            Promise.all([setting])
        }
        if (this.state.bookSearch.length > 0) {
            document.getElementsByClassName("nav-bar-search-book-dropdown")[0].style.display = 'block'
        } else {
            document.getElementsByClassName("nav-bar-search-book-dropdown")[0].style.display = 'none'
        }

    }

    updateState(text) {
        this.setState({ bookSearch: text }, () => this.filterBooks())
    }

    

    render() {
        let allBooks = [];
        if(this.state.bookSearch.length > 0) {
           allBooks = this.state.books
        }
        return (
            <div>
                <div className='nav-bar-search'>
                    <form className="nav-bar-search-bar" onSubmit={this.filterBooks}>
                        <input type="text"
                            className="nav-bar-search-bar-text"
                            placeholder="Search For Book"
                            onChange={text => this.updateState(
                                text.target.value
                            )}
                        />
                    </form>
                </div>
                <div className='nav-bar-search-book-dropdown'>
                    {allBooks.map((book, i) => (
                        // {this.props.books.map((book, i) => (
                        <div key={`book-${i}`} className="search-bar-book-info">
                            <div className='dropdown-book'>
                                <Link to={`/book/${book.id}`}>
                                    <div className="search-bar-covers">
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


export default SearchBar;
