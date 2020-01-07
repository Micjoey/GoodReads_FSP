class Bookshelf < ApplicationRecord
    has_many :books,
    foreign_key: :bookshelf_id,
    class_name: :Books
    
    has_one :owner,
    foreign_key: :user_id,
    class_name: :User
end
