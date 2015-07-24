Viewthought::Application.routes.draw do
  root :to => 'pages#home'

  match 'home'         => 'pages#home'
  match 'home_alt'     => 'pages#home_alt'
  match 'case_studies' => 'pages#case_studies'
  match 'contact'      => 'pages#contact'
  match 'government'   => 'pages#government'

  resources :messages, :controller => 'pages'
end
