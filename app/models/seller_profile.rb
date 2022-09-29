class SellerProfile < ApplicationRecord
  belongs_to :user
  has_many :products
  has_many :albums
end