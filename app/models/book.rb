class Book < ApplicationRecord
    validates :title, :genre, :author, presence: true

    has_many :shelves,
    foreign_key: :book_id,
    class_name: :OnShelfBook

    has_many :reviews,
    foreign_key: :book_id,
    class_name: :Review

    has_many :users,
    through: :shelves,
    source: :user
   
end

