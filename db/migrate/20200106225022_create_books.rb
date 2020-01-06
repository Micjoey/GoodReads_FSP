class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :genre, null: false
      t.string :author, null: false
      t.integer :rating
      t.date :date_read
      t.timestamps
    end

    add_index :books, :title
    add_index :books, :author
    add_index :books, :rating

  end
end
