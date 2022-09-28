class CartDetailsController < ApplicationController
    
    # def index
    #     cart_details = CartDetail.all 
    #     render json: cart_details, status: :ok
    # end

    # def show
    #     cart_detail = find_cart_detail
    #     render json: cart_detail, status: :ok
    # end

    def create
        if current_user
            cart = Cart.find_by!(user_id: current_user.id)
            cart_detail = CartDetail.create!(product_id: params[:product_id], cart_id: cart.id)
            render json: cart_detail, status: :created
        end
    end

    # def update
    #     cart_detail = find_cart_detail
    #     cart_detail.update!(cart_detail_params)
    #     render json: cart_detail, status: :accepted
    # end

    def destroy
        if current_user
            cart = Cart.find_by!(user_id: current_user.id)
            find_cart_detail.destroy
            head :no_content
        end
    end

    private

    def cart_detail_params
        params.permit(:id)
    end

    def find_cart_detail
        cart_detail = CartDetail.find(params[:id])
    end


end
