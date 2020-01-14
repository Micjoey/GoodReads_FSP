class GenerateTables < ActiveRecord::Migration[5.2]
  def change
    create_table "books", force: :cascade do |t|
      t.string "title", null: false
      t.string "genre", null: false
      t.string "author", null: false
      t.date "date_read"
      t.text "description", null: false
    end
      add_index :books, :title
      add_index :books, :author

    create_table "on_shelf_books", force: :cascade do |t|
      t.integer "shelf_id", null: false
      t.integer "book_id", null: false
    end

    create_table "reviews", force: :cascade do |t|
      t.string "title", null: false
      t.integer "user_id", null: false
      t.integer "book_id", null: false
      t.integer "rating", null: false
      t.text "body"
      t.date "date_reviewed", null: false
    end

    create_table "shelves", force: :cascade do |t|
      t.string "bookshelf_title", null: false
      t.integer "user_id", null: false
    end
      add_index :shelves, :user_id

    create_table "users", force: :cascade do |t|
      t.string "username", null: false
      t.string "session_token", null: false
      t.string "password_digest", null: false
      t.string "email", null: false
    end
      add_index :users, :username
      add_index :users, :session_token
  end
end
