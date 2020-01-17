class ChangeBooksColumnDateReadToBoolean < ActiveRecord::Migration[5.2]
  def change
    remove_column :books, :date_read
    add_column :books, :date_read, :boolean
  end
end
