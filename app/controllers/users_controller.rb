class UsersController < ApplicationController
    def index
        users = User.all 
        render json: users, status: :ok
    end

    # def show
    #     if current_user 
    #         render json: current_user, status: :ok
    #     else
    #         render json: {error: "Please log in"}, status: :unauthorized
    #     end
    # end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id # user logs in here
        render json: user, status: :created
    end

    # def update
    #     user = find_user
    #     user.update!(user_params)
    #     render json: user, status: :accepted
    # end

    # def destroy
    #     user = find_user
    #     user.destroy
    #     head :no_content
    # end

    private

    def user_params
        params.permit(:username, :email, :password)
    end

    def find_user
        user = User.find(params[:id])
    end
end
