class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_error
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_error

  # @current_user gets set one time, once it has a value not set again
  def current_user
    @current_user ||= User.find(session[:user_id])
  end

  private

  def render_not_found_error(error)
    render json: {error: error.message}, status: :not_found
  end

  def render_invalid_error(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

end
