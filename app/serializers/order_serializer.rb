class OrderSerializer < ActiveModel::Serializer
  attributes :id, :order_total
  belongs_to :user

  has_many :order_details

  def order_total
    total = []
    self.object.order_details.each{|detail| total << detail.product.price}
    total.sum
  end
  
end
