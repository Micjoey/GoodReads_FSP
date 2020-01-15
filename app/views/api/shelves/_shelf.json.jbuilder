json.extract! shelf, :id , :bookshelf_title, :user, :shelfBooks, :created_at, :updated_at
json.books do 
    json.array!(shelf.books) do |book|
        json.partial! "book", book: book  
    end
end