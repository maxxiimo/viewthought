class ApplicationController < ActionController::Base
  protect_from_forgery
  include Mobvious::Rails::Controller
  # before_filter :prepare_for_mobile


  private

  def prepare_for_mobile
    if request.env['mobvious.device_type'] == :mobile
      request.format = :mobile
    end
  end
end
