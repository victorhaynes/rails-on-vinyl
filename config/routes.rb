Rails.application.routes.draw do
  
  resources :cart_details
  resources :carts
  resources :order_details
  resources :orders
  resources :products
  resources :seller_profiles
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
