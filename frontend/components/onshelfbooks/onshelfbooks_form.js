// import React from 'react';
// import { withRouter, Redirect } from 'react-router-dom';

// class OnShelfBooks extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             book_id: this.props.book_id,// coming from ln 22 on add_shelf.jsx
//             shelf_id: this.props.shelf_id,
//         }
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     update(field) {
//         return e => this.setState({
//             [field]: e.currentTarget.value
//         });
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         const shelf = Object.assign({}, this.state);
//         this.props.processForm(shelf);

//     }

//     render() {

//         return (
//             <div>

//             </div>
//         )
//     }
// }

// export default OnShelfBooks;
