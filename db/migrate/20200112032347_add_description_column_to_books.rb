class AddDescriptionColumnToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :description, :text, null: false
  end
end
