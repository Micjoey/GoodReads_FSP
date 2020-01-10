class ChangeNameOfTable < ActiveRecord::Migration[5.2]
  def change
    rename_table :bookshelf_books, :bookshelfbooks
  end
end
