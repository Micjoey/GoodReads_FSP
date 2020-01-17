import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionFormSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            rating: '',
            body: '',
            user_id: '',
            book_id: '',
            date_review: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        this.props.history.push(`/`)
    }

    renderErrorsSignUp() {
        if (!this.props.errors[0].includes("Invalid")) {
            const errors = (
                <ul className="login-errors-box">
                    {this.props.errors.map((error, i) => (
                        <li className="login-errors" key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>)
            return errors
        }
    }

    render() {
        return (
            <div className="review-create-container">
                <form onSubmit={this.handleSubmit} className="review-up-box">
                    {this.props.errors.length > 0 ? this.renderErrorsSignUp() : null}
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
                            />
                        </label>
                        <label className="body-field">
                            <input type="text"
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
                        <label className="date-reviewed-field">
                            <input type="date"
                                placeholder="Please Type Here"
                                value={this.state.date_review}
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

export default withRouter(SessionFormSignUp);
