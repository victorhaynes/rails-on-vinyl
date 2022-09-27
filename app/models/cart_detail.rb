# Custom validator:
class CartDetailValidator < ActiveModel::Validator
  def validate(record)
      if OrderDetail.where(product_id: record.product_id).size > 0
          record.errors.add(:cart_detail, "error: Out of stock. Product has already been sold.")
      end
  end
end


# Model definition:
class CartDetail < ApplicationRecord
  belongs_to :cart
  belongs_to :product

  validates :product_id, uniqueness: {scope: :cart_id, message: "already in cart."}
  validates_with CartDetailValidator
end

