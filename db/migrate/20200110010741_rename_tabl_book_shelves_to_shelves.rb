class RenameTablBookShelvesToShelves < ActiveRecord::Migration[5.2]
  def change
    rename_table :bookshelves, :shelves
  end
end
