Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :books, only: [:index, :show] do
      resources :on_shelf_books, only: [:create, :destroy]
    end
    resources :shelves 
    resources :reviews
  end
  root "static_pages#root"
end
