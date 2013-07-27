class ContactMailer < ActionMailer::Base
  default from: "contact_us@viewthought.com"

  def contact_us_message
    @greeting = "Hi"

    mail to: "cmaxwell@ojala.com", subject: "Contact Us Form Submission"
  end
end
