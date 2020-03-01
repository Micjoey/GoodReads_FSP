# README
----------
## FunReads

https://appacademy-FunReads.herokuapp.com/

FunReads is a clone of the website called Goodreads, giving users the functionality to track books they wish to read.

The clone - FunReads - has been built on a Ruby on Rails, React, and Redux with a PostgreSQL database and usage of AWS S3. 

----------

## Usage
To start the project please use `npm install` and `bundle install` to install the required supporting gems and package.json. After doing so you can use the `npm start` to get the webpack going. Before running `rails s` please run `rails db:setup`. 

--------
### Key Features

   * User Authorization 
   * Books
   * Reviews
   * Shelves
--------

#### User Authorization
Users are able to sign up an account, or use the demo login, and instantly start adding books to their pre-constructed shelves.

Signing up a user:

```renderUsernameError() {
    if (!this.props.errors[0].includes("Invalid")) {
      const usernameError = this.props.errors.filter(error => error.includes("Username"))
      const errors = (
        <ul className="login-errors-box">
          {usernameError.map((error, i) => (
            <li className="login-errors" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>)
      return errors
    }
  }

<label className="username-field">
                <input type="text"
                  placeholder="Username"
                  // placeholder={this.props.errors.length > 0 ? "Username can't be blank" : 'Username'}
                  value={this.state.username}
                  onChange={this.update('username')}
                />
              </label>
   {this.props.errors.length > 0 ? this.renderUsernameError() : null}
   ```

Video:

![signing_up](https://github.com/Micjoey/FunReads_FSP/blob/master/app/assets/videos/sign%20up.gif)


Sign in error messages: 

Code:

```def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Woops! That is wrong, try again!"], status: 401
    end
  end 
```

Video:

![login_error](https://github.com/Micjoey/FunReads_FSP/blob/master/app/assets/videos/error-message.gif)

Demo Login:

Code:
```handleDemoLogin() {
      this.props.processForm({
        username: "Lord Fitzgerald",
        password: "password"
      }).then(() => this.props.history.push('/'))
  }
```

Video:

![demo_login](https://github.com/Micjoey/FunReads_FSP/blob/master/app/assets/videos/demo%20login.gif)
--------

#### Books
--------
There is both a filtering option when on the index page, and a search option always available.

You can see all of the books and a description when you are on the home page.

Video:

![All Books](https://github.com/Micjoey/FunReads_FSP/blob/master/app/assets/videos/index%20books.gif)


Users are able to see all reviews for a book and who gave the review when looking at an individual book.
Code:

```
<div className="show-book-reviews">
   <div className="show-book-all-reviews">
      <div className="show-book-all-reviews-text">ALL REVIEWS</div>
         {book.reviews.sort(function(b,a) {
               return (new Date(a.created_at)) - (new Date(b.created_at))
               }
         ).map((review,i) => (
               <div key={`review-${i}`} className="show-book-individual-review">
                  <div className="show-book-individual-review-title">Review Title: {review.title}</div>
                  <div className="show-book-individual-review-date">Date Reviewed: {formatDateWithDay(review.created_at)}</div>
                  <div className="show-book-individual-review-id">User: {allUsers[review.user_id].username}</div>
                  {/* <div className="show-book-individual-review-rating">User Rating: {review.rating}</div> */}
                  <div className="show-book-individual-review-rating">User Rating: 
                     <IndivRating min={1} max={5}
                           value={review.rating}
                     />
                  </div>
                  <div className="show-book-individual-review-body">Review: {review.body}</div>
                  <div>{(review.user_id === this.props.userId) ? <button 
                     onClick={() => this.handleDelete(review.id)}>
                           Delete Review</button> : null }
                  </div>
            </div>
      ))}
      </div>
</div>
```

Picture:

![all_reviews](https://github.com/Micjoey/FunReads_FSP/blob/master/app/assets/images/All%20Reviews.png)

From this view you are also able to see what shelves the book is on and add it to any shelf that you wish, in addition you can create a new shelf from that view. 
Code:
```
<div className="add-shelf">
    <button className="add-shelf-title">Add To A Shelf</button>
    <div className="add-shelf-content">
            <div className="add-shelf-shelves">
                {this.props.shelves.map((shelf, i) => (
                    <div key={`shelf-${i}`} className="add-shelves-sidebar-shelf">
                        <button className="add-shelves-sidebar-shelf-buttons" 
                        onClick={() => this.addShelf(shelf, `add-shelves-sidebar-shelf-button`, i) }
                        >
                            <ul className={`add-shelves-sidebar-shelf-button`}>
                                {shelf.bookshelf_title}
                            </ul>
                        </button>
                    </div>
                ))}
                <div className="add-shelf-form">
                    <ShelfFormContainer className="add-shelf-form-container"/>
                </div>
            </div>
    </div>
</div>
```

Picture:

![book_shelfs](https://github.com/Micjoey/FunReads_FSP/blob/master/app/assets/images/Add%20to%20Shelf.png)

From the show book page you are also able to delete any comments that you have made, as well as mark the book as read or not read.

![your_review](https://github.com/Micjoey/FunReads_FSP/blob/master/app/assets/videos/delete%20and%20create%20review.gif)

#### Shelf
--------
The `My Books` tab on the nav bar will take you to your shelf view which will allow a user to see all shelves that they have, and all books that exist on that shelf. 

code:
```
{this.props.shelves.map((shelf, i) => (
    <div key={`shelf-${i}`} className="index-shelves-sidebar-shelf">
        <button className="index-shelves-sidebar-shelf-buttons" onClick={()=>this.filterShelf(shelf.bookshelf_title)}>
            <ul className={`index-shelves-sidebar-shelf-button-${shelf.bookshelf_title}`}>
                {shelf.bookshelf_title}
            </ul>
        </button>
    </div>
))}
```
![show shelf](https://github.com/Micjoey/FunReads_FSP/blob/master/app/assets/videos/show%20shelf.gif)


code:
```
filterShelf(shelf) {
        let shelfName = shelf
        if (shelf !== 'All Books') {
        let newShelf = this.props.shelves.filter(indivShelf => shelfName === indivShelf.bookshelf_title)
        this.setState({shelf: newShelf}) } else {
            this.setState({shelf: this.props.retrieveBooks()})
            // this.setState({shelf: this.props.retrieveBooks()})
        }

    }
```
![shelf_filtering](https://github.com/Micjoey/FunReads_FSP/blob/master/app/assets/videos/shelf%20filter.gif)


--------

Most of the components use Promise's to make sure that the asynchronous calls are being loaded at the same time, showing a loading screen if they are not. 
![Usage of Promise](https://github.com/Micjoey/FunReads_FSP/blob/master/app/assets/images/promise.png)
![Loading Code](https://github.com/Micjoey/FunReads_FSP/blob/master/app/assets/images/loading%20code.png)











