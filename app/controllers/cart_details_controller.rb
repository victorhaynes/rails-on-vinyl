class CartDetailsController < ApplicationController
    
    skip_before_action :authenticate_user

    # if current_user.id == find_cart_detail.cart.user.id

    def index
        cart_details = CartDetail.all 
        render json: cart_details, status: :ok
    end

    def show
        cart_detail = find_cart_detail
        render json: cart_detail, status: :ok
    end

    def create
        cart_detail = CartDetail.create!(cart_detail_params)
        render json: cart_detail, status: :created
    end

    def update
        cart_detail = find_cart_detail
        cart_detail.update!(cart_detail_params)
        render json: cart_detail, status: :accepted
    end

    def destroy
        cart_detail = find_cart_detail
        cart_detail.destroy
        head :no_content
    end

    private

    def cart_detail_params
        params.permit(:number)
    end

    def find_cart_detail
        cart_detail = CartDetail.find(params[:id])
    end


end
