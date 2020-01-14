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
        if (typeof this.props.book === 'undefined') return null;
        
        const book = this.props.book
        const cover = (
            <img className="show-book-cover" src={book.photo} />
        )


        
        const book_information = (typeof this.props.book !== 'undefined') ? (
            <div className="show-book-information">
                    <div className='show-book-information-title'>{book.title}</div>
                    <div className='show-book-information-author'>by: {book.author}</div>
                    <div className='show-book-information-rating'>Rating: {book.average_rating}</div>
                    <div className='show-book-information-genre'>Genre: {book.genre}</div>
                    <div className='show-book-information-description'>Description: {book.description} </div>
            </div>
        ) : (<p>Sorry! No Books!</p>)
        
   
        return (
            <div className="show-book">
                    <div className='show-book-all-information'>
                        <div className="show-book-information-cover-image">
                            {cover}
                        </div>
                        <div className="show-book-information-detail">
                            {book_information}
                        </div>
                    </div>
                <div className="show-book-my-activity"> 
                        <div className="show-book-activity-rating">
                        <params className="show-book-my-activity-text">MY ACTIVITY</params>
                        </div>
                        <div className="show-book-activity-shelf">

                        </div>
                        <div className="show-book-activity-status">

                        </div>
                        <div className="show-book-activity-review">

                    </div>
                </div>
                <div className="show-book-reviews">
                    <div className="show-book-all-reviews">
                    <div className="show-book-all-reviews-text">ALL REVIEWS</div>
                        {book.reviews.map((review,i) => (
                            <div key={`review-${i}`} className="show-book-individual-review">
                                    <div>Date Reviewed: {review.date_reviewed}</div>
                                    <div>Review Title: {review.title}</div>
                                    <div>User Id: {review.user_id}</div>
                                    <div>User Rating: {review.rating}</div>
                                    <div>Body: {review.body}</div>
                            </div>
                        ))}
                    </div>
               </div>
            </div>
        )
    }
        
}

export default showBook

// const book_cover = [
//     images.american_spy,
//     images.book_of_strange,
//     images.upright_woman_wanted,
//     images.city_of_girls,
//     images.maybe_you_should_talk_to_someone,
//     images.the_names_of_the_dead,
//     images.quichotte,
//     images.swanns_way,
//     images.super_pumped,
//     images.the_nickel_boys,
//     images.the_starless_sea,
//     images.the_testaments,
//     images.they_called_us_enemy,
//     images.wild_game,
// ]