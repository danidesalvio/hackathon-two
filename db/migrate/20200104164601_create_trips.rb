class CreateTrips < ActiveRecord::Migration[6.0]
  def change
    create_table :trips do |t|
      t.string :name
      t.datetime :start_date
      t.datetime :end_time

      t.timestamps
    end
  end
end
