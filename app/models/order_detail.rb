class OrderDetail < ApplicationRecord
  belongs_to :order
  belongs_to :product

  validates :product_id, uniqueness: { message: "out of stock. Already purchased."}
end