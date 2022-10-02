class ArtistsController < ApplicationController
        
    def index
        artists = Artist.all 
        render json: artists, status: :ok
    end

    def show
        artist = find_artist
        render json: artist, status: :ok
    end

    def create
        artist = Artist.create!(artist_params)
        render json: artist, status: :created
    end

    def update
        artist = find_artist
        artist.update!(artist_params)
        render json: artist, status: :accepted
    end

    def destroy
        artist = find_artist
        artist.destroy
        head :no_content
    end

    private

    def artist_params
        params.permit(:number)
    end

    def find_artist
        artist = Artist.find(params[:id])
    end

end
