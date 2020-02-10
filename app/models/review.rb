class Review < ApplicationRecord
    validates :title, :user_id, :book_id, :rating, presence: true
    validates :rating, inclusion: { in: (1..5)}

   belongs_to :user,
   foreign_key: :user_id,
   class_name: :User

   belongs_to :book,
   foreign_key: :book_id,
   class_name: :Book

    

end
