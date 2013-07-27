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
      # TODO send message here
      redirect_to root_url, notice: "Message sent! Thank you for contacting us."
    else
      render "contact"
    end
  end
end
