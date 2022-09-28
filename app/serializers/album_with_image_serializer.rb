class AlbumWithImageSerializer
  include JSONAPI::Serializer

  # artist, genre, songs are associations
  # run_time, cds, vinyl, cassette are custom methods using JSONAPI::Serializer syntax

  attributes :id, :name, :run_time, :image, :image_url, :artist, :genre, :products, :cds, :vinyl, :cassette, :songs


  attributes :run_time do |object|
    minutes = object.songs.pluck(:length).sum / 60
    seconds = (object.songs.pluck(:length).sum - minutes * 60).to_s
    "#{minutes}:#{seconds.rjust(2, '0')}"
  end

  attributes :cds do |object|
    object.products.where(format: "cd")
  end  

  attributes :vinyl do |object|
    object.products.where(format: "vinyl")
  end

  attributes :cassette do |object|
    object.products.where(format: "cassette")
  end 


end
