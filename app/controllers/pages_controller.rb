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
    @message = Message.new
  end

  def create
    @message = Message.new(params[:message])
    if @message.valid?
      ContactMailer.contact_us_message(@message).deliver
      redirect_to home_url(:anchor => "contact-form"), notice: "Got it! Thank you for contacting us."
      # results in this URL: http://localhost:3000/home#contact-form
    else
      render "home"
    end
  end
end
