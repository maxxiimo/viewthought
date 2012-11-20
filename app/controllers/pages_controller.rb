class PagesController < ApplicationController
  def home
    @device = request.env['mobvious.device_type']
  end

  def about
  end

  def site_map
  end

  def terms
  end

  def privacy
  end

  def contact
  end
end
