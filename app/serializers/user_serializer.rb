class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :admin
  has_one :seller_profile
  has_one :cart
  # has_one :cart, serializer: CartWithCartDetailSerializer

end
