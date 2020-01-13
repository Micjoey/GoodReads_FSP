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
            <div className="show-book-information">
                {/* <div className="show-book-cover-div"> */}
                    <img className="show-book-cover"src={book_cover[book.id-1]}  />
                    <div className='show-book-information-title'>{book.title}</div>
                    <div className='show-book-information-author'>by: {book.author}</div>
                    <div className='show-book-information-genre'>Genre: {book.genre}</div>
                {/* </div> */}
            </div>
        ) : (<p>Sorry! No Books!</p>)
        return (
            <div className="show-book">
                <div className='show-book-all-information'>
                    <div className="show-book-information-cover-image">

                    </div>
                    <div className="show-book-information-detail">

                    </div>
                    {books}
                </div>
                <div className="show-book-my-activity">
                    <div className>

                    </div>

                </div>
               
            </div>
        )
    }
        
}

export default showBook

