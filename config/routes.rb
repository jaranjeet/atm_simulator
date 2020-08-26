Rails.application.routes.draw do
  devise_for :users, :controllers => {
    sessions: 'auth/devise/sessions',
  }

  root to: 'home#index'
  get '*path', to: 'home#index'
end
