Rails.application.routes.draw do

  get 'subscribers', to: 'subscribers#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'
  get 'nosotros', to: 'pages#quienes'
  get 'portafolio', to: 'pages#portafolio'
  get 'blog', to: 'pages#blog'
end
