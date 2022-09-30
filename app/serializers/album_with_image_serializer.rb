class AlbumWithImageSerializer
  include JSONAPI::Serializer

  # artist, genre, songs are associations
  # run_time, cds, vinyl, cassette are custom methods using JSONAPI::Serializer syntax
  #

  attributes :id, :name, :run_time, :image, :image_url, :artist, :genre, :instock_products, :instock_cds, :instock_vinyl, :instock_cassettes, :products, :cds, :vinyl, :cassettes, :songs


  attributes :run_time do |object|
    minutes = object.songs.pluck(:length).sum / 60
    seconds = (object.songs.pluck(:length).sum - minutes * 60).to_s
    "#{minutes}:#{seconds.rjust(2, '0')}"
  end

  # custom
  attributes :cds do |object|
    object.products.where(format: "cd")
  end  

  #custom
  attributes :vinyl do |object|
    object.products.where(format: "vinyl")
  end

  # custom
  attributes :cassettes do |object|
    object.products.where(format: "cassette")
  end

  # custom (an album's products that have not been ordered yet)
  attributes :instock_products do |object|
    object.products.includes(:order_details).where(order_details: {id: nil}).order(:id)
    # Student.includes(:class_sessions).where(class_sessions: {id: nil})
  end

  attributes :instock_cds do |object|
    object.products.where(format: "cd").includes(:order_details).where(order_details: {id: nil}).order(:id)
  end

  attributes :instock_vinyl do |object|
    object.products.where(format: "vinyl").includes(:order_details).where(order_details: {id: nil}).order(:id)
  end

  attributes :instock_cassettes do |object|
    object.products.where(format: "cassette").includes(:order_details).where(order_details: {id: nil}).order(:id)
  end


end
