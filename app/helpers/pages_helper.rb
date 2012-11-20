module PagesHelper
  def device
    no_device = "What?"
    if @device.nil?
      no_device
    else
      "#{@device}"
    end
  end
end
