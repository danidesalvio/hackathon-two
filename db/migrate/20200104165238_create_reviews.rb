class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.string :name
      t.integer :rating
      t.text :body
      t.belongs_to :trip, null: false, foreign_key: true

      t.timestamps
    end
  end
end
