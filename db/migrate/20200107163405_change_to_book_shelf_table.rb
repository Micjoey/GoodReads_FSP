class ChangeToBookShelfTable < ActiveRecord::Migration[5.2]
  def change
    change_column :bookshelves, :bookshelf_title, :string, null: false
  end
end
