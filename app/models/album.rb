class Album < ApplicationRecord
  belongs_to :artist
  belongs_to :genre
  has_many :products
  has_many :songs, dependent: :destroy
end
