class ProductSerializer < ActiveModel::Serializer
  attributes :id, :format, :price, :description
  has_one :seller_profile
end
