class CartsController < ApplicationController 

    def index
        carts = Cart.all 
        render json: carts, status: :ok
    end

    def show
        cart = find_cart
        render json: cart, status: :ok
    end

    def create
        cart = Cart.create!(cart_params)
        render json: cart, status: :created
    end

    def update
        cart = find_cart
        cart.update!(cart_params)
        render json: cart, status: :accepted
    end

    def destroy
        cart = find_cart
        cart.destroy
        head :no_content
    end

    private

    def cart_params
        params.permit(:number)
    end

    def find_cart
        cart = Cart.find(params[:id])
    end


end
