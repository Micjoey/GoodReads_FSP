json.extract! book, :id , :title, :genre, :author, :date_read, :reviews, :shelves, :description, :average_rating
json.photo url_for(book.photo)
