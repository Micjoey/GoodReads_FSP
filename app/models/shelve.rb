class Shelve < ApplicationRecord
    validates :bookshelf_title, :user_id, presence: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    has_many :onshelfbooks,
    foreign_key: :shelve_id,
    class_name: :OnShelfBook

    has_many :books,
    through: :onshelfbooks,
    source: :book

end
