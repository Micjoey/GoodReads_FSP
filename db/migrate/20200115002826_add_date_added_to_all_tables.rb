class AddDateAddedToAllTables < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :created_at, :datetime, null: false
    add_column :books, :updated_at,:datetime, null: false
    add_column :on_shelf_books, :created_at, :datetime, null: false
    add_column :on_shelf_books, :updated_at,:datetime, null: false
    add_column :reviews, :created_at, :datetime, null: false
    add_column :reviews, :updated_at,:datetime, null: false
    add_column :shelves, :created_at, :datetime, null: false
    add_column :shelves, :updated_at, :datetime, null: false
    add_column :users, :created_at,:datetime, null: false
    add_column :users, :updated_at,:datetime, null: false
  end
end
