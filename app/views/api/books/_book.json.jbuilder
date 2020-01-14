json.extract! book, :id , :title, :genre, :author, :date_read, :reviews, :shelves, :description, :average_rating, :unique_shelves
json.photo url_for(book.photo)
