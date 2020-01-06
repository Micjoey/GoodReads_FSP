class CreateBookshelves < ActiveRecord::Migration[5.2]
  def change
    create_table :bookshelves do |t|
      t.string :bookshelf_title, null: false
      t.integer :book_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
