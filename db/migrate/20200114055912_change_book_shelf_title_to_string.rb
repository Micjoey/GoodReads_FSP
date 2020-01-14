class ChangeBookShelfTitleToString < ActiveRecord::Migration[5.2]
  def change
    change_column :shelves, :bookshelf_title, :string
  end
end
