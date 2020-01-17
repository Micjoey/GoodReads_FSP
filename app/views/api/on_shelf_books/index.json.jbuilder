
    @shelves.each do |shelf|
        json.set! shelf.id do 
            json.extract! shelf, :id , :bookshelf_title, :user, :shelfBooks, :created_at, :updated_at
        end
    end
