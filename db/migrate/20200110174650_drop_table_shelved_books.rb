class DropTableShelvedBooks < ActiveRecord::Migration[5.2]
  def change
    drop_table :shelved_books
  end
end
