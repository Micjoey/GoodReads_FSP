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

    i = 0
    20.times do 
        book = `book-#{i}`
        book = Book.create(
            title: Faker::Book.title,
            author: Faker::Book.author,
            genre: Faker::Book.genre,
            bookshelf_id: 1,
            cover_image_url: "hello"
        )
        i += 1
    end
    i = 0
    while i <= 3 do
        if i ==0
            test = User.create(username: "test", email: "test@gmail.com", password: "password")
        else
            test = User.create(username: "test#{i}", email: "test#{i}@gmail.com", password: "password")
        end
        i += 1
    end

    bob = User.new(username: "test#{i}", email: "test#{i}@gmail.com", password: "password")
    bob.save!
    book1 = Book.new(title: "book1", genre:"fiction", author: "vanessa", bookshelf_id:"1", cover_image_url:"1")
    book1.save!
    book2 = Book.new(title: "book2", genre:"horror", author: "killerjo", bookshelf_id:"1", cover_image_url:"1")
    book2.save!

    book1_review = Review.create!(title:"book1review", user_id:bob.id, book_id: book1.id, rating:"3", date_reviewed:"1/2/2019")
    
    shelf = Shelf.new(bookshelf_title:"trial", user_id:"4")
    shelf.save!
    onshelf = OnShelfBook.new(shelf_id: "1", book_id:"2")
    onshelf.save!
end
