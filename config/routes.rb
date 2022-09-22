Rails.application.routes.draw do
  
  resources :songs
  resources :albums
  resources :artists
  resources :genres
  resources :cart_details
  resources :carts
  resources :order_details
  resources :orders
  resources :products
  resources :seller_profiles
  resources :users

  # custom routes
  get '/last-upload', to: 'albums#last_upload'
  get '/albums-with-images', to: 'albums#all_albums_images'
  get '/albums-with-images/:id', to: 'albums#single_album_with_image'
  get '/trending-albums', to: 'albums#trending_albums'
  get '/most-expensive-sold', to: 'albums#most_expensive_sold'


  # auth routes
  post '/signup', to: "users#create"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
