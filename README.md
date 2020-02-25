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
Users are able to sign up an account, or use the demo login, and instantly start adding books to their pre-constructed shelves.

Sign in error messages:
![login_error](https://github.com/Micjoey/FunReads_FSP/blob/master/app/assets/videos/error-message.gif)
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
  end```

Signing up a user:
![signing_up](https://github.com/Micjoey/FunReads_FSP/blob/master/app/assets/videos/sign%20up.gif)

Signing Up Error Message:

Demo Login:
![demo_login]()
```handleDemoLogin() {
      this.props.processForm({
        username: "Lord Fitzgerald",
        password: "password"
      }).then(() => this.props.history.push('/'))
  }```

--------
Users are able to see all reviews for a book and who gave the review when looking at an individual book.

![all_reviews](https://github.com/Micjoey/FunReads_FSP/blob/master/app/assets/images/All%20Reviews.png)

From this view you are also able to see what shelves the book is on and add it to any shelf that you wish, in addition you can create a new shelf from that view. 

![book_shelfs](https://github.com/Micjoey/FunReads_FSP/blob/master/app/assets/images/Add%20to%20Shelf.png)

From the show book page you are also able to delete any comments that you have made, as well as mark the book as read or not read.

![your_review](https://github.com/Micjoey/FunReads_FSP/blob/master/app/assets/images/personal_review.png)


--------
The `My Books` tab on the nav bar will take you to your shelf view which will allow a user to see all shelves that they have, and all books that exist on that shelf. 
![shelf_filtering](https://github.com/Micjoey/FunReads_FSP/blob/master/app/assets/images/filteringmybooks.png)
![your_review](https://github.com/Micjoey/FunReads_FSP/blob/master/app/assets/images/myBooks.png)

--------

Most of the components use Promise's to make sure that the asynchronous calls are being loaded at the same time, showing a loading screen if they are not. 
![Usage of Promise](https://github.com/Micjoey/FunReads_FSP/blob/master/app/assets/images/promise.png)
![Loading Code](https://github.com/Micjoey/FunReads_FSP/blob/master/app/assets/images/loading%20code.png)











