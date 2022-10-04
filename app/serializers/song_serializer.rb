class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :length, :run_time
  has_one :album

end
