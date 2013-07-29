class PagesController < ApplicationController
  def home
  end

  def work
  end

  def thoughts
  end

  def labs
  end

  def contact
    @message = Message.new
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
