class ProductSerializer < ActiveModel::Serializer
  attributes :id, :format, :price, :condition
  belongs_to :seller_profile
  belongs_to :album
end
