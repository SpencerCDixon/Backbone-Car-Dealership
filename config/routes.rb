Rails.application.routes.draw do
  resources :cars
  root 'home#index'
end
