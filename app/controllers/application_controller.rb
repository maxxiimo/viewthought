class ApplicationController < ActionController::Base
  protect_from_forgery
  include Mobvious::Rails::Controller
end
