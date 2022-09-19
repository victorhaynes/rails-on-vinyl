class OrderDetail < ApplicationRecord
  belongs_to :order
  belongs_to :product

  validates :product_id, uniqueness: true
end