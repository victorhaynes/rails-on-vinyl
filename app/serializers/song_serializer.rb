class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :length
  has_one :album
end
