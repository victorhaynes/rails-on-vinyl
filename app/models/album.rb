class Album < ApplicationRecord
  belongs_to :artist
  belongs_to :genre
  belongs_to :seller_profile
  has_many :products, dependent: :destroy
  has_many :songs, dependent: :destroy

  has_one_attached :image

  def image_url
    Rails.application.routes.url_helpers.url_for(image) if image.attached?
  end

end
