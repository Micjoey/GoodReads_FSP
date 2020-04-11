import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom'
import ShowBookContainer from './show_book_container';
import { IndivRating } from '../stars/star';
class IndexBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookSearch: '',
            books: [],
            loaded: false,
        }
        this.showBook = this.showBook.bind(this);
        this.filterBooks = this.filterBooks.bind(this)
        this.updateState = this.updateState.bind(this)
        this.filterBooksByGenre = this.filterBooksByGenre.bind(this)
        this.filterBooksByRating = this.filterBooksByRating.bind(this)
        this.allGenres = this.allGenres.bind(this)
        this.dropDown = this.dropDown.bind(this)
    }


    componentDidMount() {
        const books = this.props.retrieveBooks()
        Promise.all([books]).then(() => this.setState({ loaded: true }))
    }

   

    showBook(id) {
        return (
        <Redirect to={`/book/${id}`}/>   
        )    
    }

    
    updateState() {
        let allBooks = this.props.books.filter(indivBook =>
            indivBook.title.toLowerCase().includes(this.state.bookSearch.toLowerCase()) ||
            indivBook.author.toLowerCase().includes(this.state.bookSearch.toLowerCase()) ||
            indivBook.genre.toLowerCase().includes(this.state.bookSearch.toLowerCase())
        ).map(indivBook => indivBook);

        let indexBooksHTML = document.getElementsByClassName("index-books")[0]
        let indexBookInfo = document.getElementsByClassName("index-book-information")[0]
        let indexBookCover = document.getElementsByClassName("index-book-covers")[0]
        if (allBooks.length === 2) {
            indexBooksHTML.style.gridTemplateColumns = "auto auto"; 
            indexBookInfo.style.padding = `5%`
        } else if (allBooks.length === 1) {
            indexBooksHTML.style.gridTemplateColumns = "auto"; 
            indexBooksHTML.style.display = "block"; 
            indexBookInfo.style.padding = `7%`
        } else if (indexBooksHTML) {
            indexBooksHTML.style.gridTemplateColumns = "auto auto auto";
            indexBooksHTML.style.gridTemplateColumns = "auto auto auto";
            indexBookInfo.style.padding = `1%`
        }

        let notfound = images.notFound;
      
        if (allBooks.length === 0) {
            this.setState({ books: [{ title: 'Not Found', photo: notfound }] , bookSearch: '' })
            indexBooksHTML.style.gridTemplateColumns = "auto";
            indexBookInfo.style.padding = `7%`
        } else {
            this.setState({ books: allBooks })
        }
    }

    filterBooks(text) {
        this.setState({bookSearch: text}, () => this.updateState())
    }

    allGenres() {
        const indivGenres = {}
        this.props.books.map(indivBook => indivGenres[indivBook.genre] = true)
        return Object.keys(indivGenres)
    }

    filterBooksByGenre(genre) {
        const indivGenres = {}
        this.props.books.map(indivBook => indivGenres[indivBook.genre] = true)
        if (genre !== 'All Books') {
            this.filterBooks(genre)
        } else {
            this.filterBooks()
        }
        
    }

    filterBooksByRating(rating) {
        
    }

    dropDown() {
        let dropDown = document.getElementById("genre-dropdown")
        let genreTitle = document.getElementById("genre-header")
        if (dropDown.style.display) {
            dropDown.style.display = null
            genreTitle.classList.toggle("filter-bar-clicked-on")
        } else {
            dropDown.style.display = "block"
            genreTitle.classList.toggle("filter-bar-clicked-on")
        }

    }



    render() {
        if (!this.props.books) return null;
        let allBooks
        (this.state.books.length < 1) ? allBooks = this.props.books : allBooks = this.state.books
        const books = (
                <div className="index-books">
                    {allBooks.map((book, i) => (
                    // {this.props.books.map((book, i) => (
                        <div key={`book-${i}`} className="index-books-book-info">
                            <div className='dropdown-book'>
                            <Link to={`/book/${book.id}`}>
                                <div className="index-book-covers">
                                    <img src={book.photo} className="index-book-cover"/>
                                </div>
                            </Link>
                            </div>
                            <Link to={`/book/${book.id}`} className="dropdown-book-content">
                                <div className='index-book-information-title'>{book.title}</div>
                                <div className='index-book-information-author'>by: {book.author}</div>
                                <div className='index-book-information-rating'>Rating: {book.average_rating}</div>
                                <div className='index-book-information-rating'>
                                        <IndivRating min={1} max={5}
                                        value={book.average_rating}
                                    />
                                </div>
                                <div className='index-book-information-genre'>Genre: {book.genre}</div>
                                {/* <div className='index-book-information-date-read'>Date Read: {book.date_read}</div> */}
                                <div className='index-book-information-date-read'>{(book.date_read) ? 
                                                                <div>Date Read: Has Read</div> :
                                                               <div>Date Read: Hasn't Read</div>}
                                </div>
                                <div className='index-book-information-description'>
                                    <div> Book Description: </div>
                                    <div> {book.description} </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )  
        if (this.state.loaded) {
            return (
                <div className='background-color'>
                    <div className='search-bar'>
                        <div className='nav-bar-search'>
                            <div className="dropdown"> 
                                <h3 className="filter-bar-titles" id="genre-header"
                                onClick={() => this.dropDown()}>Genre</h3>
                                <div className='nav-bar-search-by-genre' id="genre-dropdown">
                                    <button className="index-book-filter-bar-buttons"
                                        onClick={() => this.filterBooksByGenre(``)}>
                                        All Books
                                    </button>
                                    {this.allGenres().map(genre => (
                                        <div key={`${genre}`} className="add-shelves-sidebar-shelf">
                                            <button className="index-book-filter-bar-buttons"
                                                onClick={() => this.filterBooksByGenre(`${genre}`)}
                                            >
                                                <ul className={`index-book-filter-bar-buttons`} >
                                                    {genre}
                                                </ul>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <form className="index-book-search-bar" onSubmit={this.filterBooks}>
                            <input type="text"
                                className="index-book-filter-bar-text"
                                placeholder="Filter Books"
                                // value={this.state.currentHp}
                                onChange={text => this.filterBooks(
                                    text.target.value
                                )}
                            />
                        </form> 
                    </div>
                    <div className="index-book-information"> 
                        {books}
                    </div>
                </div>
            )
        } else {
            return (<div className="loading-page">
				<div className="loading-sections">
					<div className='loading-circle'>
                        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
					</div>
                    <div className='loading-text'>
                        <h1>Loading...If longer than 1 min, please refresh the page.</h1>
                    </div>
				</div>
			</div>)
        }
        
    }

}


export default IndexBook







