import React from 'react';
import { Link } from 'react-router-dom';
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
        this.dropDownIdSwitch = this.dropDownIdSwitch.bind(this)
    }

    // If the search is longer than 0, then toggle dropdown and map over the books showing what is available

    dropDownIdSwitch() {
        document.getElementsByClassName("nav-bar-search-book-dropdown").classList.toggle("show");
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
        if (allBooks === 0) {
            // this.state.books.push({title: 'Not Found', photo: notfound})
            this.setState({ books: [], bookSearch: '' })
        } else {
            console.log('updating list of books', allBooks);
            this.setState({ books: allBooks })
        }

    }

    updateState(text) {
        // debugger
        this.setState({ bookSearch: text }, () => this.filterBooks())
    }

    

    render() {
        let allBooks = [];
        if(this.state.bookSearch.length > 1) {
           allBooks = this.state.books
        }
        return (
            <div>
                <div className='nav-bar-search'>
                    <form className="nav-bar-search-bar" onSubmit={this.filterBooks}>
                        <input type="text"
                            className="nav-bar-search-bar-text"
                            placeholder="Search for book"
                            onChange={text => this.updateState(
                                text.target.value
                            )}
                        />
                    </form>
                </div>
                <div className='nav-bar-search-book-dropdown'>
                    {allBooks.map((book, i) => (
                        // {this.props.books.map((book, i) => (
                        <div key={`book-${i}`} className="nav-bars-book-info">
                            <div className='dropdown-book'>
                                <Link to={`/book/${i + 1}`}>
                                    <div className="nav-bar-covers">
                                        {/* <img src={book.photo} className="nav-bar-cover" /> */}
                                        <div className='nav-bar-information-title'>{book.title}</div>
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
