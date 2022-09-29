class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :admin
  has_one :seller_profile, serializer: SellerProfileWithAlbumsSerializer
  has_one :cart, serializer: CartWithCartDetailSerializer


  # There is some redunant information in the serialized User.
  # Refactor to use a custom serializer inside of the seller_profile associations (albums, products)
end
