class CartWithCartDetailSerializer < ActiveModel::Serializer
    attributes :id, :cart_details
    # has_many :cart_details

    def cart_details
        self.object.cart_details
    end
end