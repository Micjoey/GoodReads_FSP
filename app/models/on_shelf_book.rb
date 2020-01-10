class OnShelfBook < ApplicationRecord
   validates :shelve_id, :book_id, presence: true

   belongs_to :shelve,
   foreign_key: :shelve_id,
   class_name: :Shelve

   belongs_to :book,
   foreign_key: :book_id,
   class_name: :Book

   has_one :user,
   through: :shelve,
   source: :user

end
