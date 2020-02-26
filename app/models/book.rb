class Book < ApplicationRecord
    validates :title, :genre,:description, :author, presence: true
    # validate :

    has_many :onshelfbooks,
    foreign_key: :book_id,
    class_name: :OnShelfBook,
    dependent: :destroy

    has_many :reviews,
    foreign_key: :book_id,
    class_name: :Review

    has_many :users,
    through: :onshelfbooks,
    source: :user

    has_many :shelves,
    through: :onshelfbooks,
    source: :shelf

    has_one_attached :photo

  

   def average_rating
    book = self
    average_rating = book.reviews.average(:rating)
    average_rating.round(2)
   end
  

   def unique_shelves
     shelves = self.shelves.uniq()
    #  shelves.select{|shelf| shelf.user_id == self.users}
   end


   
end

