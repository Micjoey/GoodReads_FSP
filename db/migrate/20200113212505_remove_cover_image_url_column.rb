class RemoveCoverImageUrlColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :books, :cover_image_url
  end
end
