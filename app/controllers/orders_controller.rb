class OrdersController < ApplicationController
    def index
        orders = Order.all 
        render json: orders, status: :ok
    end

    def show
        order = find_order
        render json: order, status: :ok
    end

    def create
        order = Order.create!(order_params)
        render json: order, status: :created
    end

    def update
        order = find_order
        order.update!(order_params)
        render json: order, status: :accepted
    end

    def destroy
        order = find_order
        order.destroy
        head :no_content
    end

    private

    def order_params
        params.permit(:number)
    end

    def find_order
        order = Order.find(params[:id])
    end
end
