json.extract! book, :id , :title, :genre, :author, :date_read, :reviews, :shelves, :description, :average_rating, :unique_shelves, :photo, :date_read, :created_at, :updated_at
json.photo url_for(book.photo)
