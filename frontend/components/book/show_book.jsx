import React from 'react';
import {link, Redirect} from 'react-router-dom'

class showBook extends React.Component {
    constructor(props){
        super(props) 

    }

    componentDidMount() {
        this.props.retrieveBook(this.props.match.params.bookId)
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
        const book = this.props.book
        console.log(book)
        const books = (typeof this.props.book !== 'undefined') ? (
            <div className="index-book">
                <div className="index-book-covers"><img src={book_cover[book[0]]} className="index-book-cover" /></div>
                <div className='index-book-information-title'>{book[1]}</div>
                <div className='index-book-information-author'>by: {book[3]}</div>
                <div className='index-book-information-genre'>Genre: {book[2]}</div>
            </div>
        ) : (<p>Sorry! No Books!</p>)
        return (
            <div>
                {books}
            </div>
        )
    }
        
}

export default showBook

