class DropTableShelves < ActiveRecord::Migration[5.2]
  def change
    drop_table :shelves
  end
end
