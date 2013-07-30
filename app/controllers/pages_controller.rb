class PagesController < ApplicationController
  def home
    @message = Message.new
  end

  def work
  end

  def thoughts
  end

  def labs
  end

  def contact
  end

  def create
    @message = Message.new(params[:message])
    if @message.valid?
      ContactMailer.contact_us_message(@message).deliver
      redirect_to contact_url, notice: "Message sent! Thank you for contacting us."
    else
      render "contact"
    end
  end
end
