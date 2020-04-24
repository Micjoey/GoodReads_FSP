import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom'
import { IndivRating } from '../../stars/star';
import IndexBook from './index_books_container';


class IndexBooksFilterBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookSearch: '',
            books: [],
            loaded: false,
        }

        this.filterBooks = this.filterBooks.bind(this)
        this.updateState = this.updateState.bind(this)
        this.filterBooksByGenre = this.filterBooksByGenre.bind(this)
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
        // const indexBookCover = document.getElementsByClassName("index-book-covers")[0]
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

    updateState() {
        const allBooks = this.props.books.filter(indivBook =>
            indivBook.title.toLowerCase().includes(this.state.bookSearch.toLowerCase()) ||
            indivBook.author.toLowerCase().includes(this.state.bookSearch.toLowerCase()) ||
            indivBook.genre.toLowerCase().includes(this.state.bookSearch.toLowerCase())
        ).map(indivBook => indivBook);

        

        let notfound = images.notFound;

        if (allBooks.length === 0) {
            this.setState({ books: [{ title: 'Not Found', photo: notfound }], bookSearch: '' })
        } else {
            this.setState({ books: allBooks })
        }
        this.dynamicGridStyling(allBooks)
    }

    filterBooks(text) {
        this.setState({ bookSearch: text }, () => this.updateState())
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
        const dropDown = document.getElementById("genre-dropdown")
        const genreTitle = document.getElementById("genre-header")
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
                        <IndexBook allBooks = {allBooks}/>
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


export default IndexBooksFilterBar







