class CartsController < ApplicationController 

    def show
        if current_user.id == find_cart.user_id || current_user.admin
            cart = find_cart
            render json: cart, status: :ok
        else
            render json: {errors: "Cannot view another user's cart."}, status: :forbidden
        end
    end

    # def destroy
    #     cart = find_cart
    #     cart.destroy
    #     head :no_content
    # end

    # custom

    def user_cart
        if current_user
            cart = Cart.find_by!(user_id: current_user.id )
            render json: cart, status: :ok
        end
    end

    private

    # def cart_params
    #     params.permit(:user_id)
    # end

    def find_cart
        cart = Cart.find(params[:id])
    end


end
