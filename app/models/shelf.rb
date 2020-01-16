class Shelf < ApplicationRecord
    validates :bookshelf_title, :user_id, presence: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    has_many :shelfBooks,
    foreign_key: :shelf_id,
    class_name: :OnShelfBook,
    dependent: :destroy

    has_many :books,
    through: :shelfBooks,
    source: :book

    has_many :photos,
    through: :books,
    source: :photo


end
