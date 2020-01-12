class RemoveShelfIdFromBooksTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :books, :bookshelf_id
  end
end
