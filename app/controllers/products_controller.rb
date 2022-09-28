class ProductsController < ApplicationController
        
    skip_before_action :authenticate_user
    before_action :is_seller?, only: [:create, :update, :destroy]

    def index
        products = Product.all 
        render json: products, status: :ok
    end

    def show
        product = find_product
        render json: product, status: :ok
    end

    def create
        product = Product.create!(product_params)
        render json: product, status: :created
    end

    def update
        product = find_product
        product.update!(product_params)
        render json: product, status: :accepted
    end

    def destroy
        product = find_product
        product.destroy
        head :no_content
    end

    private

    def product_params
        params.permit(:number)
    end

    def find_product
        product = Product.find(params[:id])
    end
end
