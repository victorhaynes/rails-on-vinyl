class AlbumSerializer < ActiveModel::Serializer
  has_one :artist
  has_one :genre

  attributes :id, :name
end
