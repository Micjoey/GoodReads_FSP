import React from 'react';
import { withRouter } from 'react-router-dom';
// import { formatDate } from '../../util/date_util';



class EditReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            rating: 3,
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
        this.props.deleteReview(review).then(() => this.props.retrieveBook(this.state.book_id));
    }
    


    render() {
        return (
            <div className="review-create-container">
                <form onSubmit={this.handleChange} className="review-up-box">
                    <div className="review-up">
                        <label className="title-field">
                            <div>Title of Review:</div>
                            <input type="text"
                                placeholder="Leave Title of Review Here"
                                value={this.state.title}
                                onChange={this.update('title')}
                            />
                        </label>
                        <label className="rating-field">
                            <div>Rating(1 through 5):</div>
                            <input type="range"
                                min='1'
                                max='5'
                                placeholder="Rating"
                                value={this.state.rating}
                                onChange={this.update('rating')}
                            />
                            <output name='ratingOutput' id='ratingOutput'>{this.state.rating}</output>
                        </label>
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

export default EditReview;
