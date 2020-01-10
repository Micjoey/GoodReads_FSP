class CreateShelvesTable < ActiveRecord::Migration[5.2]
  def change
      create_table :shelves do |t|
      t.integer "shelve_id", null: false
      t.integer "user_id", null: false
      t.timestamps
    end

    add_index :shelves, :user_id
  end
end
