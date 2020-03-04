import React from 'react';
import { withRouter } from 'react-router-dom';
import { Rating } from '../stars/star';

class AddReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            rating: '',
            body: '',
            user_id: this.props.user_id,
            book_id: this.props.book_id
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // the issue is that reviewed_date is null:false but no date is getting passed through.


    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const review = Object.assign({}, this.state);
        this.props.createReview(review).then(() => this.props.retrieveBook(this.state.book_id))
        this.setState({
            title: '',
            rating: 1,
            body: '',
        })
    }

    range(min, max) {
        return Array(max - min + 1).fill().map((_, i) => min + i)
    }


    render() {
        
        
        return (
            <div className="review-create-container">
                <form onSubmit={this.handleSubmit} className="review-up-box">
                    <div className="review-up">
                        <label className="title-field">
                            <div>Title of Review:</div>
                            <input type="text"
                                placeholder="Leave Title of Review Here"
                                value={this.state.title}
                                onChange={this.update('title')}
                            />
                        </label>
                        <div className='rating-field'>
                            <div className='rating-star'>Rating:</div>
                            <Rating min={1} max={5}
                                value={this.state.rating}
                                onChange={(rating) => {
                                    this.setState({ rating })
                                }}
                            />
                        </div>   
                        <label className="body-field">
                             <div>Body:</div>
                            <textarea type="text"
                                placeholder="Please Type Here"
                                value={this.state.body}
                                onChange={this.update('body')}
                            />
                        </label>
                        <label className="book-id-field">
                            <input type="hidden"
                                value={this.state.book_id}
                            />
                        </label>
                        <label className="user-id-field">
                            <input type="hidden"
                                value={this.state.user_id}
                            />
                        </label>
                        <br />
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(AddReview);
