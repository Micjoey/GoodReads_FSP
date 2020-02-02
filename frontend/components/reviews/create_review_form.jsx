import React from 'react';
import { withRouter } from 'react-router-dom';

class AddReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            rating: 3,
            body: '',
            date_reviewed: '',
            user_id: this.props.user_id,
            book_id: this.props.book_id
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const review = Object.assign({}, this.state);
        this.props.createReview(review);
    }


    render() {
        return (
            <div className="review-create-container">
                <form onSubmit={this.handleSubmit} className="review-up-box">
                    <div className="review-up">
                        <label className="title-field">
                            <input type="text"
                                placeholder="Title"
                                value={this.state.title}
                                onChange={this.update('title')}
                            />
                        </label>
                        <label className="rating-field">
                            <input type="range"
                                min='1'
                                max='5'
                                placeholder="Rating"
                                value={this.state.rating}
                                onChange={this.update('rating')}
                            />
                        </label>
                        <label className="date-reviewed-field">
                            <input type="date"
                                // placeholder="Please Type Here"
                                value={this.state.date_reviewed}
                                onChange={this.update('date_reviewed')}
                            />
                        </label>
                        <label className="body-field">
                            <textarea type="text"
                                placeholder="Please Type Here"
                                value={this.state.body}
                                onChange={this.update('body')}
                            />
                        </label>
                        <label className="book-id-field">
                            <input type="hidden"
                                placeholder="Please Type Here"
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
