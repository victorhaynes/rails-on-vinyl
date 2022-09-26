class SellerProfilesController < ApplicationController
        
    skip_before_action :authenticate_user
    
    def index
        seller_profiles = SellerProfile.all 
        render json: seller_profiles, status: :ok
    end

    def show
        seller_profile = find_seller_profile
        render json: seller_profile, status: :ok
    end

    def create
        seller_profile = SellerProfile.create!(seller_profile_params)
        render json: seller_profile, status: :created
    end

    def update
        seller_profile = find_seller_profile
        seller_profile.update!(seller_profile_params)
        render json: seller_profile, status: :accepted
    end

    def destroy
        seller_profile = find_seller_profile
        seller_profile.destroy
        head :no_content
    end

    private

    def seller_profile_params
        params.permit(:number)
    end

    def find_seller_profile
        seller_profile = SellerProfile.find(params[:id])
    end
end
