class ContactMailer < ActionMailer::Base
  default from: "no-reply@ojalainc.com"

  def contact_us_message(message)
    @message = message

    mail to: "chris.maxwell@ojalainc.com", subject: "Contact Us Form Submission"
  end
end
