class Reviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.integer :book_id, null: false
      t.integer :rating, null: false
      t.text :body
      t.date :date_reviewed, null: false
      t.timestamps
    end
  end
end
