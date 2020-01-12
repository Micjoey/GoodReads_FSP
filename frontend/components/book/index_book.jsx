import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import ShowBookContainer from './show_books_container';

class IndexBook extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.retrieveBooks()
    }


    render() {
        const book_cover = [
            images.american_spy, 
            images.book_of_strange, 
            images.upright_woman_wanted,
            images.city_of_girls, 
            images.maybe_you_should_talk_to_someone, 
            images.the_names_of_the_dead,
            images.quichotte, 
            images.swanns_way,
            images.super_pumped, 
            images.the_nickel_boys,
            images.the_starless_sea,
            images.the_testaments,
            images.they_called_us_enemy,
            images.wild_game,
        ]
        const indexBook = (book) => {
            return (
                <ShowBookContainer book={book} />
            )
        }
        const books = (
                <div className="show-books">
                    {this.props.books.map((book, i) => (
                        <div key={`book-${i}`} className="show-books-book-info">
                            {/* <Redirect to={`/home/${book.id}`}> */}
                                <div className="show-book-covers"><img src={book_cover[i]} className="show-book-cover"/></div>
                            {/* </Redirect> */}
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