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

  def nav_tab(title, url, options = {})
    current_tab = options.delete(:current)
    # options[:class] = (current_tab == title) ? 'active' : 'inactive'
    klass = (current_tab == title) ? 'active' : 'inactive'
    content_tag(:a, title, :href => url, :class => klass)
  end

  def currently_at(tab)
    render partial: 'shared/navigation_text', locals: {current_tab: tab}
  end
end
