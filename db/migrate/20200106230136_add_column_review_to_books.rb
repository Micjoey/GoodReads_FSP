class AddColumnReviewToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :review, :text
  end
end
