class Genre < ApplicationRecord
    validates :name, inclusion: { in: ["Rock", "Electronic", "Pop", "Hip Hop", "Folk, World & Country", "Jazz"] }
end
