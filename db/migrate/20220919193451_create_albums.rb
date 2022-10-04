class CreateAlbums < ActiveRecord::Migration[6.1]
  def change
    create_table :albums do |t|
      t.string :name
      t.integer :release_year
      t.string :label
      t.belongs_to :artist, null: false, foreign_key: true
      t.belongs_to :genre, null: false, foreign_key: true
      t.belongs_to :seller_profile, null: false, foreign_key: true

      t.timestamps
    end
  end
end
