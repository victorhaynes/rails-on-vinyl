class Cart < ApplicationRecord
  belongs_to :user
  has_many :cart_details
  has_many :products, through: :cart_details
end
