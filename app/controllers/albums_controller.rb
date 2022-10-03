class AlbumsController < ApplicationController
    
    skip_before_action :authenticate_user, only: [:index, :show, :all_albums_images, :single_album_with_image, :latest_upload, :trending_albums, :most_expensive_sold]
    before_action :is_seller?, only: [:create, :update]
    before_action :is_admin?, only: [:destroy]

    def index
        albums = Album.all.order(:id)
        render json: albums, status: :ok
    end

    def show
        album = find_album
        render json: album, status: :ok
    end

    # Before Action: is_seller?
    def create
        album = Album.new(name: params[:name], genre_id: params[:genre_id], artist_id: params[:artist_id], image: params[:image])
        album.seller_profile=@current_user.seller_profile
        album.save!
        songs = JSON.parse(params[:list_of_songs])
        songs.each{|song| Song.create!(album_id: Album.last.id, name: song["name"], length: song["length"])}
        render json: album, status: :created
    end

    # Before Action: is_seller? (then check if you are the uploadeer OR an admin)
    def update
        album = find_album
        if album.seller_profile.id == @current_user.seller_profile.id || @current_user.admin
            album.update!(album_params)
            render json: album, status: :accepted
        else
            render json: {errors: "You are only authorized to edit your own uploads"}, status: :unauthorized
        end
    end

    # Before Action: is_admin?
    def destroy
        album = find_album
        album.destroy
        head :no_content
    end

    #custom

    def all_albums_images
        albums = Album.all.order(:id)
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

    # def album_params
    #     params.permit(:name, :genre_id, :artist_id, :image, :list_of_songs)
    # end

    def find_album
        album = Album.find(params[:id])
    end

end
