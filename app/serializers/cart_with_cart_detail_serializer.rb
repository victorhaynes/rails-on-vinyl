class CartWithCartDetailSerializer < ActiveModel::Serializer
    attributes :id, :cart_details
    # has_many :cart_details

    def cart_details
        ActiveModel::SerializableResource.new(self.object.cart_details, each_serializer: CartDetailSerializer)
    end

    # def pages
    #     ActiveModel::SerializableResource.new(object.pages,  each_serializer: PageSerializer)
    # end
end