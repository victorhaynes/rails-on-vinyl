class AlbumSerializer < ActiveModel::Serializer
  belongs_to :artist
  belongs_to :genre
  has_many :songs

  attributes :id, :name, :seller_profile, :release_year

end
