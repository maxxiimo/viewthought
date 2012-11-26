module ApplicationHelper
  include Mobvious::Rails::Helper

  def device_test
    # Drop in controller: @device = request.env['mobvious.device_type']
    no_device = "What!? That's nil bro."
    if @device.nil?
      no_device
    else
      "#{@device}"
    end
  end

  def head
    render :partial => 'layouts/head'
  end

  def scripts
    render :partial => 'layouts/scripts'
  end

  def chromeframe
    render :partial => 'layouts/chromeframe'
  end
end
