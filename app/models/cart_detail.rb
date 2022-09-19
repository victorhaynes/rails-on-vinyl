class CartDetail < ApplicationRecord
  belongs_to :cart
  belongs_to :product

  validates :product_id, uniqueness: {scope: :cart_id}
end

