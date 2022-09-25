class User < ApplicationRecord
    has_many :orders
    has_one :cart, dependent: :destroy
    has_one :seller_profile, dependent: :destroy

    validates :username, :email, uniqueness: true

    has_secure_password
end