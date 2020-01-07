class ChangeReviewsColumnToBody < ActiveRecord::Migration[5.2]
  def change
    remove_column :bookshelves, :book_id
  end
end
