class OrdersController < ApplicationController

    # custom create: can only create when you are logged in
    def create
        if current_user
            order = Order.create!(user_id: session[:user_id])
            render json: order, status: :created
        end
    end

    # custom index: return all orders for the logged in user
    def user_orders
        if current_user
            orders = Order.where(user_id: session[:user_id])
            if orders.size > 0
                render json: orders, status: :ok
            else
                render json: {errors: "User has no orders"}, status: :not_found
            end
        end
    end

end
