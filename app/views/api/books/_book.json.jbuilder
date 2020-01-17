json.extract! book, :id , :title, :genre, :author, :date_read, :reviews, :shelves, :description, :average_rating, :unique_shelves, :photo, :onshelfbooks
json.photo url_for(book.photo)
