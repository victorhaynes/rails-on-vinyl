class CartDetailSerializer < ActiveModel::Serializer
  attributes :id, :product
  belongs_to :cart
  # belongs_to :product


  ###### why can I use product association directly?


end
