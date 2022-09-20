class AlbumsController < ApplicationController

    def index
        albums = Album.all 
        render json: albums, status: :ok
    end

    def show
        album = find_album
        render json: album, status: :ok
    end

    def create
        album = Album.create!(album_params)
        render json: album, status: :created
    end

    def update
        album = find_album
        album.update!(album_params)
        render json: album, status: :accepted
    end

    def destroy
        album = find_album
        album.destroy
        head :no_content
    end

    #custom

    def all_albums_images
        albums = Album.all
        test = albums.map {|a| AlbumWithImageSerializer.new(a).serializable_hash[:data][:attributes]}
        render json: test, status: :ok
    end

    def last_upload
        album = Album.last
        render json: AlbumWithImageSerializer.new(album).serializable_hash[:data][:attributes], status: :ok
    end


    private

    def album_params
        params.permit(:name, :genre_id, :artist_id, :image)
    end

    def find_album
        album = Album.find(params[:id])
    end

end
