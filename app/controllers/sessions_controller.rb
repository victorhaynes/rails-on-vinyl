class SessionsController < ApplicationController
  
  skip_before_action :authenticate_user

  # login
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id 
      render json: user, status: :ok 
    else 
      render json: {error: "Invalid Credentials"}, status: :unauthorized
    end
  end

  #logout = we need to remove our users session 
  def destroy
    session.delete :user_id
    head :no_content
  end
end


# Step 1) create instance of a User, check to see if provided username & password matches info stored in db
# Step 2) If yes, log User in by writing their user.id to the session hash (session[:user_id])
# or 
# 
#  