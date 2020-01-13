import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom'
import ShowBookContainer from './show_book_container';

class IndexBook extends React.Component {
    constructor(props) {
        super(props)
        this.showBook = this.showBook.bind(this);
    }

    componentDidMount() {
        this.props.retrieveBooks()
    }



    showBook(id) {
        return (
        <Redirect to={`/book/${id}`}/>   
        )    
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
        if (!this.props.books) return null;
        const books = (
                <div className="index-books">
                    {this.props.books.map((book, i) => (
                        <div key={`book-${i}`} className="index-books-book-info">
                            <Link to={`/book/${i+1}`}>
                                <div className="index-book-covers"><img src={book.photo} className="index-book-cover"/></div>
                            </Link>
                            <div className='index-book-information-title'>{book.title}</div>
                            <div className='index-book-information-author'>by: {book.author}</div>
                        </div>
                    ))}
                </div>
            )
        return (
                <div className="index-book-information"> 
                  {books}
                </div>
        )
        
    }

}


export default IndexBook