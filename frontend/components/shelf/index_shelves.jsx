import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import IndexShelvesContainer from './index_shelves_container';

class IndexShelves extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.retrieveShelves()
    }
    render(){
        console.log(this.props.shelves)
        if(!this.props.shelves) return (<p>Not Working</p>);
        return (
            <div className="index-shelves-main">
                <div className="index-shelves-main-navbar">
                    <p className="index-shelves-main-navbar-mybooks">My Books</p>
                    <h2>Search Bar Placeholder</h2>
                </div>
                <div className="index-shelves-main-inner">
                    <div className="index-shelves-main-content">
                        <div className="index-shelves-main-sidebar">
                            <div className="index-shelves-main-sidebar-list-shelves">
                                <p>Bookshelves</p>
                            </div>
                            <button className="index-shelves-main-sidebar-add-shelf-button">Add Shelf</button>
                        </div>
                        <div className="index-shelves-main-shelves">
                            <div className="index-shelves-main-shelves-nav-bar">
                                <div> Cover </div>
                                <div> Title </div>
                                <div> Author </div>
                                <div> Avg Rating </div>
                                <div> My Rating </div>
                                <div> Date Added </div>
                                <div> Date Read </div>
                            </div>
                            <div className="index-shelves-books">   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



}

export default (IndexShelves)