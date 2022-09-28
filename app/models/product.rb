class Product < ApplicationRecord
  belongs_to :seller_profile
  has_many :order_details
  has_many :orders, through: :order_details
  has_many :cart_details
  has_many :carts, through: :cart_details
  belongs_to :album
  
  validates :format, inclusion: { in: %w(vinyl cassette cd)}
  validates :condition, inclusion: {in: ["Mint (M)", "Near Mint (NM or M-)", "Very Good Plus (VG+)", "Very Good (VG)", "Good Plus (G+)", "Good (G)", "Fair (F)", "Poor (P)"]}
end