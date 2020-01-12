# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
    
    User.destroy_all
    Book.destroy_all
    Review.destroy_all
    
    require 'faker'
    include Faker

# books

# 1
book1 = Book.create(
    title: Faker::Book.title,
    author: Faker::Book.author,
    genre: Faker::Book.genre,
    cover_image_url: "app/assets/images/American_Spy_By_Lauren_wilkinson.png",
)
# 2
book2 = Book.create(
    title: Faker::Book.title,
    author: Faker::Book.author,
    genre: Faker::Book.genre,
    cover_image_url: "app/assets/images/Book-of-Strange-New-Things.jpg",
)
# 3
book3 = Book.create(
    title: Faker::Book.title,
    author: Faker::Book.author,
    genre: Faker::Book.genre,
    cover_image_url: "app/assets/images/D5fmBfKUYAAWhf8.jpg-large.jpeg",
)
# 4
book4 = Book.create(
    title: Faker::Book.title,
    author: Faker::Book.author,
    genre: Faker::Book.genre,
    cover_image_url: "app/assets/images/Elizabeth_Gilbert_by_city_of_girls.png",
)
# 5
book5 = Book.create(
    title: Faker::Book.title,
    author: Faker::Book.author,
    genre: Faker::Book.genre,
    cover_image_url: "app/assets/images/Maybe_You_Should_Talk_To_Someone_by_Lori_Gottlieb.png",
)
# 6
book6 = Book.create(
    title: Faker::Book.title,
    author: Faker::Book.author,
    genre: Faker::Book.genre,
    cover_image_url:"app/assets/images/psychopath-test.jpg",
)
# 7
bool7 = Book.create(
    title: Faker::Book.title,
    author: Faker::Book.author,
    genre: Faker::Book.genre,
    cover_image_url:"app/assets/images/Salman_Rushdie_by_Quichotte.png",
)
# 8
book8 = Book.create(
    title: Faker::Book.title,
    author: Faker::Book.author,
    genre: Faker::Book.genre,
    cover_image_url: "app/assets/images/Swann's_Way_by_Marcel_Proust.png",
)
# 9
book9 = Book.create(
    title: Faker::Book.title,
    author: Faker::Book.author,
    genre: Faker::Book.genre,
    cover_image_url: "app/assets/images/Super_Pumped_by_Mike_Isaac.png",
)
# 10
book10 = Book.create(
    title: Faker::Book.title,
    author: Faker::Book.author,
    genre: Faker::Book.genre,
    cover_image_url:"app/assets/images/The_Nickel_Boys_by_Colson_Whitehead.png",
)
# 11
book11 = Book.create(
    title: Faker::Book.title,
    author: Faker::Book.author,
    genre: Faker::Book.genre,
    cover_image_url:"app/assets/images/The_starless_sea_by_erin_morgenstern.png",
)
# 12
book12 = Book.create(
    title: Faker::Book.title,
    author: Faker::Book.author,
    genre: Faker::Book.genre,
    cover_image_url:"app/assets/images/The_Testaments_by_Atwood.png",
)
# 13
book13 = Book.create(
    title: Faker::Book.title,
    author: Faker::Book.author,
    genre: Faker::Book.genre,
    cover_image_url:"app/assets/images/They_Called_us_enemy_by_Georege_takei.png",
)
# 14
book14 = Book.create(
    title: Faker::Book.title,
    author: Faker::Book.author,
    genre: Faker::Book.genre,
    cover_image_url:"app/assets/images/Wild_Game_by_Adrienne_Brodeur.png",
)

#users
i = 0
while i <= 3 do
    if i ==0
        test = User.create(username: "test", email: "test@gmail.com", password: "password")
    else
        test = User.create(username: "test#{i}", email: "test#{i}@gmail.com", password: "password")
    end
    i += 1
end


#shelves

shelf1 = Shelf.create(bookshelf_title: "Want To Read", user_id: "1")
shelf2 = Shelf.create(bookshelf_title: "Reading", user_id: "1")
shelf3 = Shelf.create(bookshelf_title: "Read", user_id: "1")
shelf4 = Shelf.create(bookshelf_title: "Adventure", user_id: "1")
shelf5 = Shelf.create(bookshelf_title: "Want To Read", user_id: "2")
shelf6 = Shelf.create(bookshelf_title: "Reading", user_id: "2")
shelf7 = Shelf.create(bookshelf_title: "Read", user_id: "2")
shelf8 = Shelf.create(bookshelf_title: "Adventure", user_id: "2")
 
# on_shelf_books

on_shelf_books1 = OnShelfBook.create(shelf_id: 1, book_id: 1)
on_shelf_books1 = OnShelfBook.new(shelf_id: 1, book_id: 1)
on_shelf_books1.save!
on_shelf_books2 = OnShelfBook.create(shelf_id: 2, book_id: 2)
on_shelf_books3 = OnShelfBook.create(shelf_id: 3, book_id: 3)
on_shelf_books4 = OnShelfBook.create(shelf_id: 4, book_id: 4)
on_shelf_books5 = OnShelfBook.create(shelf_id: 5, book_id: 5)
on_shelf_books6 = OnShelfBook.create(shelf_id: 6, book_id: 6)
on_shelf_books7 = OnShelfBook.create(shelf_id: 7, book_id: 7)
on_shelf_books8 = OnShelfBook.create(shelf_id: 8, book_id: 8)
on_shelf_books9 = OnShelfBook.create(shelf_id: 1, book_id: 9)
on_shelf_books10 = OnShelfBook.create(shelf_id: 2, book_id: 10)
on_shelf_books11 = OnShelfBook.create(shelf_id: 3, book_id: 11)
on_shelf_books12 = OnShelfBook.create(shelf_id: 4, book_id: 12)
on_shelf_books13 = OnShelfBook.create(shelf_id: 5, book_id: 13)
on_shelf_books14 = OnShelfBook.create(shelf_id: 1, book_id: 14)


#reviews

review1 = Review.create(
    title: Faker::Quotes::Shakespeare.hamlet_quote, 
    user_id: rand(1..3), 
    book_id: rand(1..14), 
    rating: rand(1..5),
    body: Faker::Quotes::Shakespeare.as_you_like_it_quote,
    date_reviewed: Faker::Date.between(from: 1.year.ago, to: Date.today)
)
review2 = Review.create(
    title: Faker::Quotes::Shakespeare.hamlet_quote, 
    user_id: rand(1..3), 
    book_id: rand(1..14), 
    rating: rand(1..5),
    body: Faker::Quotes::Shakespeare.as_you_like_it_quote,
    date_reviewed: Faker::Date.between(from: 1.year.ago, to: Date.today)
)
review3 = Review.create(
    title: Faker::Quotes::Shakespeare.hamlet_quote, 
    user_id: rand(1..3), 
    book_id: rand(1..14), 
    rating: rand(1..5),
    body: Faker::Quotes::Shakespeare.as_you_like_it_quote,
    date_reviewed: Faker::Date.between(from: 1.year.ago, to: Date.today)
)
review4 = Review.create(
    title: Faker::Quotes::Shakespeare.hamlet_quote, 
    user_id: rand(1..3), 
    book_id: rand(1..14), 
    rating: rand(1..5),
    body: Faker::Quotes::Shakespeare.as_you_like_it_quote,
    date_reviewed: Faker::Date.between(from: 1.year.ago, to: Date.today)
)
review5 = Review.create(
    title: Faker::Quotes::Shakespeare.hamlet_quote, 
    user_id: rand(1..3), 
    book_id: rand(1..14), 
    rating: rand(1..5),
    body: Faker::Quotes::Shakespeare.as_you_like_it_quote,
    date_reviewed: Faker::Date.between(from: 1.year.ago, to: Date.today)
)
review6 = Review.create(
    title: Faker::Quotes::Shakespeare.hamlet_quote, 
    user_id: rand(1..3), 
    book_id: rand(1..14), 
    rating: rand(1..5),
    body: Faker::Quotes::Shakespeare.as_you_like_it_quote,
    date_reviewed: Faker::Date.between(from: 1.year.ago, to: Date.today)
)
review7 = Review.create(
    title: Faker::Quotes::Shakespeare.hamlet_quote, 
    user_id: rand(1..3), 
    book_id: rand(1..14), 
    rating: rand(1..5),
    body: Faker::Quotes::Shakespeare.as_you_like_it_quote,
    date_reviewed: Faker::Date.between(from: 1.year.ago, to: Date.today)
)
review8 = Review.create(
    title: Faker::Quotes::Shakespeare.hamlet_quote, 
    user_id: rand(1..3), 
    book_id: rand(1..14), 
    rating: rand(1..5),
    body: Faker::Quotes::Shakespeare.as_you_like_it_quote,
    date_reviewed: Faker::Date.between(from: 1.year.ago, to: Date.today)
)
review9 = Review.create(
    title: Faker::Quotes::Shakespeare.hamlet_quote, 
    user_id: rand(1..3), 
    book_id: rand(1..14), 
    rating: rand(1..5),
    body: Faker::Quotes::Shakespeare.as_you_like_it_quote,
    date_reviewed: Faker::Date.between(from: 1.year.ago, to: Date.today)
)
review10 = Review.create(
    title: Faker::Quotes::Shakespeare.hamlet_quote, 
    user_id: rand(1..3), 
    book_id: rand(1..14), 
    rating: rand(1..5),
    body: Faker::Quotes::Shakespeare.as_you_like_it_quote,
    date_reviewed: Faker::Date.between(from: 1.year.ago, to: Date.today)
)
review11 = Review.create(
    title: Faker::Quotes::Shakespeare.hamlet_quote, 
    user_id: rand(1..3), 
    book_id: rand(1..14), 
    rating: rand(1..5),
    body: Faker::Quotes::Shakespeare.as_you_like_it_quote,
    date_reviewed: Faker::Date.between(from: 1.year.ago, to: Date.today)
)
review12 = Review.create(
    title: Faker::Quotes::Shakespeare.hamlet_quote, 
    user_id: rand(1..3), 
    book_id: rand(1..14), 
    rating: rand(1..5),
    body: Faker::Quotes::Shakespeare.as_you_like_it_quote,
    date_reviewed: Faker::Date.between(from: 1.year.ago, to: Date.today)
)
review13 = Review.create(
    title: Faker::Quotes::Shakespeare.hamlet_quote, 
    user_id: rand(1..3), 
    book_id: rand(1..14), 
    rating: rand(1..5),
    body: Faker::Quotes::Shakespeare.as_you_like_it_quote,
    date_reviewed: Faker::Date.between(from: 1.year.ago, to: Date.today)
)




    
end
