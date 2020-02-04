Rails.application.routes.draw do
  resources :subscribers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'
  get '/quien-soy', to: 'pages#quienes'
  get '/politicas-de-privacidad', to: 'pages#politicas'
  #get 'portafolio', to: 'pages#portafolio'
  #get 'blog', to: 'pages#blog'
end
