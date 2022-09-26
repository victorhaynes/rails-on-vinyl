class UsersController < ApplicationController

    skip_before_action :authenticate_user, only: :create

    def show 
        if current_user 
            render json: current_user, status: :ok
        end 
    end 

    def create
        # we also need to make sure secure our users password
        # bcrypt will handle this piece
        # we need to keep track of our user: sessions
        # sessions is an empty hash, we need to populate the hash with our users information
        ### -> at the time of account creation, create a cart for the new user
        # first we need to create our user with the sign up form
        # session[:user_id] is the stage where we log our user in, sessions is going to retain the information weve stored until we explicitly destroy it 
        user = User.create!(user_params)
        cart = Cart.create!(user_id: user.id)
        session[:user_id] = user.id 
        render json: user, status: :created
    end
    
    private 

    def user_params
        params.permit(:username, :email, :password, :password_confirmation)
    end

end