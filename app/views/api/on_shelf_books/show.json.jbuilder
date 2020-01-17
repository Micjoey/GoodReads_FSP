# json.extract! @onshelfbook, :id , :book_id, :shelf_id
json.extract! @book, :id , :title, :genre, :author, :date_read, :reviews, :shelves, :description, :average_rating, :unique_shelves, :photo
json.photo url_for(@book.photo)




