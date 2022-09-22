class AlbumWithImageSerializer
  include JSONAPI::Serializer

  # has_one :artist
  # has_one :genre


  attributes :id, :name, :image, :image_url, :artist, :genre

  # def artist
  #   self.artist
  # end

  # def genre
  #   self.genre
  # end

end
