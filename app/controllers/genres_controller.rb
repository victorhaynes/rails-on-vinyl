class GenresController < ApplicationController
    skip_before_action :authenticate_user
   
    def index
        return json: Genre.all, status: :ok
    end
end
