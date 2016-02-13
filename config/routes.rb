Rails.application.routes.draw do

  root 'landings#index'
  resources :projects, :stories
  resources :stories do get 'download', on: :member end

end

