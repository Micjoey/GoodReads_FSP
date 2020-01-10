class EditShelvesTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :shelves, :shelve_id, :title
  end
end
