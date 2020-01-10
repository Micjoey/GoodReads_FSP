class RemoveColumnsFromBooks < ActiveRecord::Migration[5.2]
  def change
    remove_column :books, :rating
    remove_column :books, :review
  end
end
