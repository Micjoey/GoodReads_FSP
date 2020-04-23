import React from 'react';
import IndexBooksFilter from './index_books_filter_bar_container';
import IndexBooks from './index_books_container';

class IndexBooksMainFile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookSearch: '',
            books: [],
            loaded: false,
        }
    }
    componentDidMount() {
        const books = this.props.retrieveBooks()
        Promise.all([books]).then(() => this.setState({ loaded: true }))
    }


    render() {
        if (!this.props.books) return null;
        let allBooks
        (this.state.books.length < 1) ? allBooks = this.props.books : allBooks = this.state.books
        // need to import books
        if (this.state.loaded) {
            return (
                <div className="background-color">
                    <div className='search-bar'>
                        <IndexBooksFilter />
                    </div>
                    <div className="index-book-information">
                        <IndexBooks />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="loading-page">
                    <div className="loading-sections">
                        <div className='loading-circle'>
                            <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                        </div>
                        <div className='loading-text'>
                            <h1>Loading...If longer than 1 min, please refresh the page.</h1>
                        </div>
                    </div>
                </div>
            )
        }
    }
}


export default IndexBooksMainFile







