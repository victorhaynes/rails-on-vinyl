class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :artist
  has_one :genre
end
