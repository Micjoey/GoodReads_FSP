class Shelf < ApplicationRecord
    validates :bookshelf_title, :user_id, presence: true

    has_one :user,
    foreign_key: :user_id,
    class_name: :User

    has_many :onshelfbooks,
    foreign_key: :shelf_id,
    class_name: :OnShelfBook

    has_many :books,
    through: :onshelfbook,
    source: :book

end
