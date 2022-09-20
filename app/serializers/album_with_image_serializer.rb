class AlbumWithImageSerializer
  include JSONAPI::Serializer

  # has_one :artist
  # has_one :genre

  attributes :id, :name, :image, :image_url
end
