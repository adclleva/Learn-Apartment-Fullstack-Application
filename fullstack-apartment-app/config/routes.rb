Rails.application.routes.draw do
  resources :apartments
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # root to: "home#index"
  get '*path', to: 'pages#root', constraints: ->(request){ request.format.html? }
  root to: 'pages#root'
end
