Rails.application.routes.draw do
  root 'static_pages#index'

  resources :bets

  namespace :api do
    namespace :v1 do
      resources :bets, only: [:index, :create, :update, :destroy]
    end
  end
end
