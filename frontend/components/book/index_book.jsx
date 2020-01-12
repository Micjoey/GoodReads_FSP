import React from 'react';
import { link, Redirect } from 'react-router-dom'

class IndexBook extends React.Component {
    constructor(props) {
        super(props)
        
    }

    componentDidMount() {
        this.props.retrieveBooks()
    }

    render() {
        const book_cover = [
            images.american_spy, 
            images.book_of_strange, 
            images.city_of_girls, 
            images.maybe_you_should_talk_to_someone, 
            images.quichotte, 
            images.super_pumped, 
            images.swanns_way,
            images.the_names_of_the_dead,
            images.the_nickel_boys,
            images.the_starless_sea,
            images.the_testaments,
            images.they_called_us_enemy,
            images.upright_woman_wanted,
            images.wild_game,
        ]
        const books = (this.props.books.length !== 0) ? (
                <div className="all-books">
                    {this.props.books.map((book, i) => (
                        // <ul className="all-books" key={`book-${i}`}>
                        //     <ul className="all-books-book-info"><img src={book_cover[i]} className="all-book-covers" alt="" />{book.title}, {book.author}</ul>
                        // </ul>
                        <div key={`book-${i}`} className="all-books-book-info">
                            <img src={book_cover[i]} className="all-book-covers" alt="" />
                            <div className='show-book-information-title'>{book.title} by,</div>
                            <div className='show-book-information-author'>{book.author}</div>

                        </div>
                    ))}
                </div>
            ) : (<p>Sorry! No Books!</p>)
        return (
                <div className="all-book-information"> 
                  {books}
                </div>
        )
        
    }

}

export default IndexBook