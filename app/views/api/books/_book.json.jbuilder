json.extract! book, :id , :title, :genre, :author, :date_read, :reviews, :shelves, :description
json.photo url_for(book.photo)
