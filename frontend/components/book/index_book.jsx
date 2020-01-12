import React from 'react';
import { link, Redirect } from 'react-router-dom'
import ShowBookContainer from './show_books_container';

class IndexBook extends React.Component {
    constructor(props) {
        super(props)
        // this.indexBook = this.indexBook.bind(this)
    }

    componentDidMount() {
        this.props.retrieveBooks()
    }

    // indexBook() {
    //     return (
    //     <ShowBookContainer />
    //     )
    // }

    render() {
        const book_cover = [
            images.american_spy, 
            images.book_of_strange, 
            images.city_of_girls, 
            images.maybe_you_should_talk_to_someone, 
            images.quichotte, 
            images.super_pumped, 
            images.swanns_way,
            images.the_names_of_the_dead,
            images.the_nickel_boys,
            images.the_starless_sea,
            images.the_testaments,
            images.they_cshowed_us_enemy,
            images.upright_woman_wanted,
            images.wild_game,
        ]
        const books = (
                <div className="show-books">
                    {this.props.books.map((book, i) => (
                        <div key={`book-${i}`} className="show-books-book-info">
                            {/* <button className="demo-login" onClick={this.handleDemoLogin}>Demo Login</button> */}
                            <button><ShowBookContainer key={book.id} book_information={book} /></button>
                            <div className="show-book-covers"><img src={book_cover[i]} className="show-book-cover"/></div>
                            <div className='show-book-information-title'>{book.title} by,</div>
                            <div className='show-book-information-author'>{book.author}</div>
                        </div>
                    ))}
                </div>
            )
        return (
                <div className="show-book-information"> 
                  {books}
                </div>
        )
        
    }

}

export default IndexBook