class CartSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user

  has_many :cart_details
end
