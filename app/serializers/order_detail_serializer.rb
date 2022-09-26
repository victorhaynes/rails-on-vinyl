class OrderDetailSerializer < ActiveModel::Serializer
  attributes :id, :product
  belongs_to :order
  # belongs_to :product
  

  ###### why can I use product association directly?

end
