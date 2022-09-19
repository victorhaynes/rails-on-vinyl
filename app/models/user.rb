class User < ApplicationRecord
    has_many :orders
    has_one :cart, dependent: :destroy
    has_one :seller_profile, dependent: :destroy
end