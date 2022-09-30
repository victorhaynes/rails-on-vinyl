class OrdersController < ApplicationController

    # custom create: can only create when you are logged in
    # def create
    #     if current_user
    #         order = Order.create!(user_id: session[:user_id])
    #         render json: order, status: :created
    #     end
    # end

    def confirm_order
        if @current_user.cart.cart_details.size > 0
            order = Order.create!(user_id: session[:user_id])
            details = current_user.cart.cart_details
            details.each{ |detail| OrderDetail.create!(order_id: order.id, product_id: detail.product_id)}
    
            # Now empty carts, product has been ordered.
            details.each{ |detail| CartDetail.where(product_id: detail.product_id).destroy_all}
            render json: order, status: :created
        else
            render json: {errors: "Cannot checkout without any items in cart."}, status: :bad_request
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
