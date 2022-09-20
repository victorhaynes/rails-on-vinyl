class SessionsController < ApplicationController
  
  # login
  # if user exists
  # if user is authenticated
  # .authenticate will apply the hash & salt to the password provided to make sure they match
  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :ok
    else
      render json: {error: "Invalid Credentials"}, status: :unauthorized
    end
  end

  # logout
  # remove user's session
  def destroy
    session.delete :user_id
  end
end
