class RenameShelvesColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :shelves, :title, :bookshelf_title
  end
end
