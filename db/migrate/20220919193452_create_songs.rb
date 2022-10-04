class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.belongs_to :album, null: false, foreign_key: true
      t.string :name
      t.integer :length
      t.string :run_time

      t.timestamps
    end
  end
end
