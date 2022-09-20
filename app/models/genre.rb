class Genre < ApplicationRecord
    validates :name, inclusion: { in: ["Rock", "Electronic", "Hip Hop", "Folk, World & Country", "Jazz"] }
end
