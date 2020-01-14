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
        if(!this.props.shelf) return (<p>Not Working</p>);
        return (
            <div>
                <p>WORKING</p>
            </div>
        )
    }



}

export default (IndexShelves)