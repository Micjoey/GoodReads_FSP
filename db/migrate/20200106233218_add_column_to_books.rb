class AddColumnToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :bookshelf_id, :integer, null: false
  end
end
