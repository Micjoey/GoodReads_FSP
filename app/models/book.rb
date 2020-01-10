class Book < ApplicationRecord
    validates :title, :genre, :author, presence: true

    has_many :reviews,
    foreign_key: :book_id,
    class_name: :Review

    has_many :OnShelfBook,
    foreign_key: :book_id,
    class_name: :OnShelfBook   
    
    has_one :owner,
    through: :shelves,
    source: :user

    has_many :shelves,
    through: :OnShelfBook,
    source: :shelves
    
end

