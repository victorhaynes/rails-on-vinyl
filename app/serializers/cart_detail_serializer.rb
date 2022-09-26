class CartDetailSerializer < ActiveModel::Serializer
  attributes :id, :product
  belongs_to :cart
  # belongs_to :product


  ###### why can I use product attribute directly?


  # # 2 layer of nesting workaround
  # def products
  #   self.object.product
  # end

end
