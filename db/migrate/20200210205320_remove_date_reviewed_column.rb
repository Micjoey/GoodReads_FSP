class RemoveDateReviewedColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :date_reviewed
  end
end
