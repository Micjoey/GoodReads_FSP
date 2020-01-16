import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class OnShelfBooks extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const shelf = Object.assign({}, this.state);
        this.props.processForm(shelf);

    }

    render() {
    }
}

export default OnShelfBooks;
