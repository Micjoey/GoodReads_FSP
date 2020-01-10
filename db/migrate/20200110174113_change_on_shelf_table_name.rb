class ChangeOnShelfTableName < ActiveRecord::Migration[5.2]
  def change
    rename_table :onshelfbooks, :on_shelf_books
  end
end
