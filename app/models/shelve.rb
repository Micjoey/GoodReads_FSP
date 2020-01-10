class Shelve < ApplicationRecord
    validates :bookshelf_title, :user_id, presence: true

    has_many :shelves,
    foreign_key: :shelve_id,
    class_name: :BookshelfBooks

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    has_many :books,
    through: :shelves,
    source: :book
end
