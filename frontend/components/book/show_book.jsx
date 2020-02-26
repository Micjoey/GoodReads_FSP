import React from 'react';
import { formatDateWithDay } from '../../util/date_util';
import AddShelfContainer from './add_shelf_container';
import CreateReviewContainer from '../reviews/create_review_form_container';
import { deleteReview } from '../../actions/review_actions';
import { IndivRating } from '../stars/star';



class showBook extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loaded: false,
            hasRead: '',
        }
    }

    componentDidMount() {
        const bookMount = this.props.retrieveBook(this.props.match.params.bookId)
        const usersMount = this.props.retrieveAllUsers()
        Promise.all([bookMount, usersMount]).then( () => this.setState({loaded:true}))
    }


    handleDelete(reviewID) {
        deleteReview(reviewID)
        this.props.retrieveBook(this.props.book.id)
    }

    hasRead() {
        let book = this.props.book
        book.date_read = !book.date_read
        this.props.updateBook(book)
            .then(() => this.setState({hasRead: book.date_read}))
            .then(() => this.props.retrieveBook(this.props.match.params.bookId))
        
    }

    
    
    render() {
        if (this.state.loaded) {
            const book = this.props.book
            const cover = (
                <img className="show-book-cover" src={book.photo} />
            )
            const allUsers = this.props.allUsers
            const shelf = (book.unique_shelves.length > 1) ? <p>On Shelves:</p> : <p>On Shelf:</p>
            const book_information = (typeof this.props.book !== 'undefined') ? (
                <div className="show-book-information">
                        <div className='show-book-information-title'>{book.title}</div>
                        <div className='show-book-information-author'>by: {book.author}</div>
                    <div className='show-book-information-rating '>Avg. Rating: {book.average_rating} 
                            <IndivRating min={1} max={5}
                                value={book.average_rating}
                            />
                            
                        </div>
                        <div className='show-book-information-genre'>Genre: {book.genre}</div>
                        <div className='show-book-information-description'>Description: {book.description} </div>
                </div>
            ) : (<p>Sorry! No Books!</p>)
            return (
            <div className='background-color'>
                <div className="show-book">
                    <div className='show-book-background'>
                        <div className='show-book-all-information-and-reviews'>
                            <div className='show-book-all-information'>
                                <div className="show-book-information-cover-image">
                                    {cover}
                                </div>
                                <div className="show-book-information-detail">
                                    {book_information}
                                </div>
                            </div>
                            <div className="show-book-review">
                                <div className="leave-a-review"> Leave a review! </div>
                                <CreateReviewContainer book_id={book.id} user_id={this.props.userId} />
                            </div>
                        </div>
                        <div className="show-book-my-activity"> 
                            <div className="show-book-add-to-shelf"> 
                                <AddShelfContainer />
                            </div>
                            
                            <div className="empty-space">
                                {/* empty space */}
                            </div>
                            <div className="show-book-activity-rating">
                                <params className="show-book-my-activity-text">MY BOOK ACTIVITY</params>
                            </div>
                            <div className="show-book-activity-shelf">
                                <div className="show-book-unique-shelves">
                                    {shelf}
                                    <div className="dropdown-content2">
                                        <ul className="show-book-all-shelves">
                                            {book.unique_shelves.map((shelf, i)=>(
                                                (shelf.user_id === this.props.userId) ? <ul key={`shelf-${i}`}>{shelf.bookshelf_title}</ul> : <div key={`shelf-${i}`}> None </div>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="show-book-myactivity">
                                    {(book.date_read) ?
                                    <div>Book: Read</div> :
                                    <div>Book: Hasn't Read Yet</div>}
                                </div>
                                <button className="show-book-myactivity" onClick={() => this.hasRead()}>
                                    {(!book.date_read) ?
                                    <div>Mark As: Read</div> :
                                    <div>Mark As: Hasn't Read Yet</div>}
                                </button>
                            </div>
                                <div className="show-book-activity-status">

                                </div>
                                <div className="show-book-activity-review">

                                </div>
                        </div>
                        <div className="show-book-reviews">
                            <div className="show-book-all-reviews">
                                <div className="show-book-all-reviews-text">ALL REVIEWS</div>
                                    {book.reviews.sort(function(b,a) {
                                        return (new Date(a.created_at)) - (new Date(b.created_at))
                                        }
                                    ).map((review,i) => (
                                        <div key={`review-${i}`} className="show-book-individual-review">
                                            <div className="show-book-individual-review-title">Review Title: {review.title}</div>
                                            <div className="show-book-individual-review-date">Date Reviewed: {formatDateWithDay(review.created_at)}</div>
                                            <div className="show-book-individual-review-id">User: {allUsers[review.user_id].username}</div>
                                            {/* <div className="show-book-individual-review-rating">User Rating: {review.rating}</div> */}
                                            <div className="show-book-individual-review-rating">User Rating: 
                                                <IndivRating min={1} max={5}
                                                    value={review.rating}
                                                />
                                            </div>
                                            <div className="show-book-individual-review-body">Review: {review.body}</div>
                                            <div>{(review.user_id === this.props.userId) ? <button 
                                                onClick={() => this.handleDelete(review.id)}>
                                                    Delete Review</button> : null }
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        } else {
            return (<div className="loading-page">
                <div className="loading-sections">
                    <div>
                        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                        <span className="sr-only">Loading...If longer than 1 min, please refresh the page.</span>
                    </div>
                </div>
            </div>)}
    }
}

export default showBook
