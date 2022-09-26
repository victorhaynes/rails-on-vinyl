class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  before_action :authenticate_user

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_error
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_error


  private

  # checking to see if there is a current user 
  # what is @current_user? if it has no value then query database (memoization)
  def current_user 
    @current_user ||= User.find_by(id: session[:user_id]) 
  end 

  def render_not_found_error(error)
    render json: {errors: [error.message]}, status: :not_found
  end

  def render_invalid_error(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  def authenticate_user
    render json: {errors: "Not Authorized. Please login. (authenticate_user)"}, status: :unauthorized unless current_user
  end

  def is_authorized?
    permitted = current_user.admin?
    render json: {errors: "User does not have admin permission"}, status: :forbidden unless permitted
  end

  def is_seller?
    seller = current_user.seller_profile
    render json: {errors: "User does not have a seller profile. Please create."}, status: :forbidden unless seller
  end

end
