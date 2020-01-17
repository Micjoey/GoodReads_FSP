class ChangeBooksColumnDateReadToBoolean < ActiveRecord::Migration[5.2]
  def change
    change_column :books, :date_read, :boolean
  end
end
