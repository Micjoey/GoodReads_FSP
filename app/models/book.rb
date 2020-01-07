class Book < ApplicationRecord
    has_many :bookshelves,
    foreign_key: :bookshelf_id,
    class_name: :Books

    has_many :owners,
    through: :bookshelves,
    source: :owner
end
