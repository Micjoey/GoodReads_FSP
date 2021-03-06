import React from 'react';
import IndexBooks from './index_books';
import MinMaxBookRatings from '../min_max_book_rating';
import LoadingScreen from '../../misc/loading_screen';


class IndexBooksFilterBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookSearch: '',
            books: [],
            loaded: false,
        }

        this.updateState = this.updateState.bind(this)
        this.filterBooks = this.filterBooks.bind(this)
        this.filterBooksByRating = this.filterBooksByRating.bind(this)
        this.allGenres = this.allGenres.bind(this)
        this.dropDown = this.dropDown.bind(this)
        this.dynamicGridStyling = this.dynamicGridStyling.bind(this)
    }


    componentDidMount() {
        const books = this.props.retrieveBooks()
        Promise.all([books]).then(() => this.setState({ loaded: true }))
    }

    dynamicGridStyling(booksArray) {
        const indexBooksHTML = document.getElementsByClassName("index-books")[0]
        const indexBookInfo = document.getElementsByClassName("index-book-information")[0]
        if (booksArray.length === 2) {
            indexBooksHTML.style.display = "grid";
            indexBooksHTML.style.gridTemplateColumns = "auto auto";
            indexBookInfo.style.padding = `5%`
        } else if (booksArray.length === 1) {
            indexBooksHTML.style.gridTemplateColumns = "auto";
            indexBooksHTML.style.display = "block";
            indexBookInfo.style.padding = `7%`
        } else if (indexBooksHTML) {
            indexBooksHTML.style.display = "grid";
            indexBooksHTML.style.gridTemplateColumns = "auto auto auto";
            indexBookInfo.style.padding = `1%`
        }
        if (booksArray.length === 0) {
            indexBooksHTML.style.gridTemplateColumns = "auto";
            indexBookInfo.style.padding = `7%`
        }
    }

    updateState(text) {
        this.setState({ bookSearch: text }, () => this.filterBooks())
        // ToggleColoring(text)
    }

    filterBooks() {
        const searchElement = this.state.bookSearch
        const filteredBooks = this.props.books.filter(indivBook =>
            indivBook.title.toLowerCase().includes(searchElement.toLowerCase()) ||
            indivBook.author.toLowerCase().includes(searchElement.toLowerCase()) ||
            indivBook.genre.toLowerCase().includes(searchElement.toLowerCase())
        ).map(indivBook => indivBook);

        

        let notfound = images.notFound;

        if (filteredBooks.length === 0) {
            this.setState({ books: [{ title: 'Not Found', photo: notfound }], bookSearch: '' })
        } else {
            this.setState({ books: filteredBooks })
        }
        this.dynamicGridStyling(filteredBooks)
    }

    allGenres() {
        const indivGenres = {}
        this.props.books.map(indivBook => {
            indivGenres[indivBook.genre.toLowerCase()] = true})
        return Object.keys(indivGenres)
    }
    
    filterBooksByRating(rating) {
        const leveledRating = Math.floor(parseInt(rating))
        let filteredBooks = this.props.books
        
        if (rating !== '') {
            filteredBooks = this.props.books.filter(indivBook =>
                Math.floor(parseInt(indivBook.average_rating)) === leveledRating
            ).map(indivBook => indivBook);
        } 
        this.setState({ books: filteredBooks })
        this.dynamicGridStyling(filteredBooks)
    
    }

    dropDown(dropDownId) {
        const dropDown = document.getElementById(`${dropDownId}-dropdown`)
        const genreTitle = document.getElementById(`${dropDownId}-header`)
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
        if (this.state.loaded) {
            return (
                <div className='background-color'>
                    <div className='search-bar'>
                        <div className='nav-bar-search'>
                            <div className="dropdown">
                                <h3 className="filter-bar-titles" id="genre-header"
                                    onClick={() => this.dropDown("genre")}>Genre</h3>
                                <div className='nav-bar-search-by-genre' id="genre-dropdown">
                                    <button className="index-book-filter-bar-buttons"
                                        onClick={() => this.updateState(``)}>
                                        All Books
                                    </button>
                                    {this.allGenres().map((genre, idx) => (
                                        <div key={`${genre}`} className="add-shelves-sidebar-shelf">
                                            <button className="index-book-filter-bar-buttons"
                                                onClick={() => this.updateState(`${genre}`, `${idx}`)}
                                            >
                                                <ul className={`index-book-filter-bar-buttons`} id={`genre-${idx}`}>
                                                    {genre}
                                                </ul>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="dropdown">
                                <h3 className="filter-bar-titles" id="rating-header"
                                    onClick={() => this.dropDown("rating")}>Average Ratings</h3>
                                <div className='nav-bar-search-by-genre' id="rating-dropdown">
                                    <button className="index-book-filter-bar-buttons"
                                        onClick={() => this.filterBooksByRating(``)}>
                                        All Ratings
                                    </button>
                                    {MinMaxBookRatings(this.props.books).map((rating,idx) => (
                                        <div key={`${rating}`} className="add-shelves-sidebar-shelf">
                                            <button className="index-book-filter-bar-buttons"
                                                onClick={() => this.filterBooksByRating(`${rating}`, `${idx}`)}
                                            >
                                                <ul className={`index-book-filter-bar-buttons `} id={`rating-${idx}`}>
                                                    {rating}
                                                </ul>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <form className="index-book-search-bar" onSubmit={this.updateState}>
                            <input type="text"
                                className="index-book-filter-bar-text"
                                placeholder="Filter Books"
                                onChange={text => this.updateState(
                                    text.target.value
                                )}
                            />
                        </form>
                    </div>
                    <div className="index-book-information">
                        {IndexBooks(allBooks)}
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    {LoadingScreen()}
                </div>
            )
        }
    }
}


export default IndexBooksFilterBar







