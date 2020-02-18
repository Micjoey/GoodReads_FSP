import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom'
import ShowBookContainer from './show_book_container';

class IndexBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookSearch: '',
            books: [],
        }
        this.showBook = this.showBook.bind(this);
        this.filterBooks = this.filterBooks.bind(this)
    }


    componentDidMount() {
        this.props.retrieveBooks()
    }

   

    showBook(id) {
        return (
        <Redirect to={`/book/${id}`}/>   
        )    
    }

    filterBooks() {
        debugger
        let allBooks = this.props.books.filter(indivBook => indivBook.title.toLowerCase().includes(this.state.bookSearch.toLowerCase()))
        this.setState({ books: allBooks })
        // } else {
        //     this.setState({ shelf: this.props.retrieveBooks() })
        // }

    }
   
    render() {
        if (!this.props.books) return null;
        let allBooks
        (this.state.books.length === 0) ? allBooks = this.props.books : allBooks = this.state.books
        const books = (
                <div className="index-books">
                    {allBooks.map((book, i) => (
                    // {this.props.books.map((book, i) => (
                        <div key={`book-${i}`} className="index-books-book-info">
                            <div className='dropdown-book'>
                            <Link to={`/book/${i+1}`}>
                                <div className="index-book-covers">
                                    <img src={book.photo} className="index-book-cover"/>
                                </div>
                            </Link>
                            </div>
                            <div className="dropdown-book-content">
                                <div className='index-book-information-title'>{book.title}</div>
                                <div className='index-book-information-author'>by: {book.author}</div>
                                <div className='index-book-information-rating'>Rating: {book.average_rating}</div>
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
                            </div>
                        </div>
                    ))}
                </div>
            )  
        return (
            <div className='background-color'>
                <div className='search-bar'>
                    <form className="index-book-search-bar" onSubmit={this.filterBooks}>
                        <input type="text"
                            className="index-book-search-bar-text"
                            placeholder="Search for book"
                            // value={this.state.currentHp}
                            onChange={text => this.setState({
                                bookSearch: text.target.value
                            })}
                        />
                    </form>   

                </div>
                <div className="index-book-information"> 
                  {books}
                </div>
            </div>
        )
        
    }

}


export default IndexBook







