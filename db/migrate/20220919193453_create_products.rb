class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :format
      t.integer :price
      t.text :condition
      t.belongs_to :seller_profile, null: false, foreign_key: true
      t.belongs_to :album, null: false, foreign_key: true

      t.timestamps
    end
  end
end
