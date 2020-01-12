import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom'
import ShowBookContainer from './show_book_container';

class IndexBook extends React.Component {
    constructor(props) {
        super(props)
        this.indexBook = this.indexBook.bind(this);
    }

    componentDidMount() {
        this.props.retrieveBooks()

    }



    indexBook() {
        const book = `/book/${this.props.match.params.bookId}`
        this.props.hist.push(book)
    }

    render() {
        const book_cover = [
            images.american_spy, 
            images.book_of_strange, 
            images.upright_woman_wanted,
            images.city_of_girls, 
            images.maybe_you_should_talk_to_someone, 
            images.the_names_of_the_dead,
            images.quichotte, 
            images.swanns_way,
            images.super_pumped, 
            images.the_nickel_boys,
            images.the_starless_sea,
            images.the_testaments,
            images.they_called_us_enemy,
            images.wild_game,
        ]
    
        const books = (
                <div className="show-books">
                    {this.props.books.map((book, i) => (
                        <div key={`book-${i}`} className="show-books-book-info">
                            <div className="show-book-covers"><img src={book_cover[i]} className="show-book-cover"/></div>
                            <div className='show-book-information-title'>{book.title}</div>
                            <div className='show-book-information-author'>by: {book.author}</div>
                        </div>
                    ))}
                </div>
            )
        return (
                <div className="show-book-information"> 
                  {books}
                </div>
        )
        
    }

}


export default withRouter(IndexBook)