class SellerProfileWithAlbumsSerializer < ActiveModel::Serializer
    attributes :id, :albums, :products
    # has_many :albums
    # has_many :products

    def albums
        ActiveModel::SerializableResource.new(self.object.albums, each_serializer: AlbumSerializer)
    end

    def products
        ActiveModel::SerializableResource.new(self.object.products, each_serializer: ProductSerializer)
    end
end