class CreateCartDetails < ActiveRecord::Migration[6.1]
  def change
    create_table :cart_details do |t|
      t.belongs_to :cart, null: false, foreign_key: true
      t.belongs_to :product, null: false, foreign_key: true

      t.timestamps
    end
  end
end
