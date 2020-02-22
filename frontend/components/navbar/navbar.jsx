import React from 'react';
import { Link} from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import SearchBarContainer from './search_bar_container';




class RootFile extends React.Component {
    constructor(props) {
        super(props); 
        this.dropDownIdSwitch = this.dropDownIdSwitch.bind(this)
    }

    dropDownIdSwitch() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    reload () {
        window.location.assign('/home');
    }



    personalGreeting() {
        return(
        <div className="header-group">
            <div className="header-group-logged-in">
                <Link to="/home" className="FunReads-title-logged-in" >FunReads</Link>
                <Link to="/home" className="nav-bar-home-button" >Home</Link>
                <Link to='/Shelf' className="nav-bar-mybooks-button">My Books</Link>
                <SearchBarContainer allBooks={this.props.retrieveBooks()}/>
                <div className="dropdown">
                    <img src={images.account_image} className="dropdown-image-icon" alt="" />
                    <div className="dropdown-content">
                        <disabled className="header-currentuser-name">Hi, {this.props.currentUser.username}!</disabled>
                        <Link to="/home" className="nav-bar-dropdown-mybooks-button" >Home</Link>
                        <Link to='/Shelf' className="nav-bar-dropdown-mybooks-button">My Books</Link>
                        <Link to='/home' className="nav-bar-dropdown-mybooks-button" onClick={this.props.logout}>Log Out</Link>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    
    sessionLinks() {
        return (
            <GreetingContainer/>
            )
        }
        
        render() {
            if (this.props.currentUser) {
                return this.personalGreeting()
            } else {
                return this.sessionLinks()
            }
        }
    }
    
    
    export default RootFile;
