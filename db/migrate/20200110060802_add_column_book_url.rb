class AddColumnBookUrl < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :cover_image_url, :string, null: false
  end
end
