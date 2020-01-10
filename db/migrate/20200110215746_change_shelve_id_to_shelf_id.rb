class ChangeShelveIdToShelfId < ActiveRecord::Migration[5.2]
  def change
    rename_column :on_shelf_books, :shelve_id, :shelf_id
  end
end
