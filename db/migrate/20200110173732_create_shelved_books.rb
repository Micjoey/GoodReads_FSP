class CreateShelvedBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :shelved_books do |t|
      t.integer "shelve_id", null: false
      t.integer "book_id", null: false
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
      t.timestamps
    end

  end
end
