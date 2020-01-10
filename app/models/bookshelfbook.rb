class BookshelfBooks < ApplicationRecord
   validates :shelve_id, :book_id, presence: true

   belongs_to :shelf,
   foreign_key: :shelve_id,
   class_name: :Shelve

   belongs_to :book,
   foreign_key: :book_id,
   class_name: :Book
end
