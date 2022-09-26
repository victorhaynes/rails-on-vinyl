class OrderDetailsController < ApplicationController
    
    skip_before_action :authenticate_user
    
    def index
        order_details = OrderDetail.all 
        render json: order_details, status: :ok
    end

    def show
        order_detail = find_order_detail
        render json: order_detail, status: :ok
    end

    def create
        order_detail = OrderDetail.create!(order_detail_params)
        render json: order_detail, status: :created
    end

    def update
        order_detail = find_order_detail
        order_detail.update!(order_detail_params)
        render json: order_detail, status: :accepted
    end

    def destroy
        order_detail = find_order_detail
        order_detail.destroy
        head :no_content
    end

    private

    def order_detail_params
        params.permit(:number)
    end

    def find_order_detail
        order_detail = OrderDetail.find(params[:id])
    end

end
