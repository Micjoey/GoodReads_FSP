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
                <ul>
                    {this.props.books.map((book, i) => (
                        <ul className="all-books" key={`book-${i}`}>
                            <ul><img src={book_cover[i]} className="all-book-covers" alt=""/></ul>
                            <ul>{book.title}, {book.author}</ul>
                            <ul></ul>
                                    
                        </ul>
                    ))}
                </ul>
            ) : (<p>Sorry! No Books!</p>)
        return (
                <div className="all-book-information"> 
                  {books}
                </div>
        )
        
    }

}

export default IndexBook