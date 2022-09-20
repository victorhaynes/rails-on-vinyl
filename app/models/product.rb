class Product < ApplicationRecord
  belongs_to :seller_profile
  has_many :order_details
  has_many :orders, through: :order_details
  has_many :cart_details
  has_many :carts, through: :cart_details
  belongs_to :album
  validates :format, inclusion: { in: %w(vinyl cassette cd)}
end