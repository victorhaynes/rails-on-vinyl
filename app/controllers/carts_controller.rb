class CartsController < ApplicationController 

    def show
        if @current_user.id == find_cart.user_id || @current_user.admin
            cart = find_cart
            render json: cart, status: :ok
        else
            render json: {errors: "Cannot view another user's cart."}, status: :forbidden
        end
    end

    # custom

    def user_cart
        cart = Cart.find_by!(user_id: @current_user.id )
        render json: cart, status: :ok
    end

    private

    def find_cart
        cart = Cart.find(params[:id])
    end


end
