class Book < ApplicationRecord
    validates: :title, :genre, :author, presence: true

    has_many :reviews,
    foreign_key: :book_id,
    class_name: :Bookshelf

    has_many :BookshelfBooks,
    foreign_key: :book_id,
    class_name: :BookshelfBooks   
    
    has_one :owner,
    through: :BookshelfBooks,
    source: :user

    has_many :shelves,
    through: :BookshelfBooks,
    source: :shelves
end

