
    @shelves.each do |shelve|
        json.set! shelve.id do 
            json.partial! "shelve", shelve: shelve
        end
    end
