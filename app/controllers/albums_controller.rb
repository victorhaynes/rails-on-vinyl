class AlbumsController < ApplicationController
    
    skip_before_action :authenticate_user, only: [:index, :show, :all_albums_images, :single_album_with_image, :latest_upload, :trending_albums, :most_expensive_sold]

    def index
        albums = Album.all 
        render json: albums, status: :ok
    end

    def show
        album = find_album
        render json: album, status: :ok
    end

    def create
        if current_user.seller_profile
            album = Album.create!(album_params)
            render json: album, status: :created
        else
            render json: {errors: "User is not a seller."}, status: :forbidden
        end
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
        serialized_albums_with_images = albums.map {|a| AlbumWithImageSerializer.new(a).serializable_hash[:data][:attributes]}
        render json: serialized_albums_with_images, status: :ok
    end

    def single_album_with_image
        album = find_album
        render json: AlbumWithImageSerializer.new(album).serializable_hash[:data][:attributes], status: :ok
    end

    def latest_upload
        album = Album.last
        render json: AlbumWithImageSerializer.new(album).serializable_hash[:data][:attributes], status: :ok
    end

    def trending_albums
        trending_albums = Album.joins(:products).group('albums.id').order('count(albums.id) DESC')
        serialized_trending_albums = trending_albums.map {|a| AlbumWithImageSerializer.new(a).serializable_hash[:data][:attributes]}
        render json: serialized_trending_albums, status: :ok
    end

    def most_expensive_sold
        most_expensive_albums = Album.joins(products: :order_details).order(price: :desc)
        serialized_most_expensive_albums = most_expensive_albums.map {|a| AlbumWithImageSerializer.new(a).serializable_hash[:data][:attributes]}
        render json: serialized_most_expensive_albums, status: :ok
    end
    

    private

    def album_params
        params.permit(:name, :genre_id, :artist_id, :image)
    end

    def find_album
        album = Album.find(params[:id])
    end

end
