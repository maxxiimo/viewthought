class Message
  include ActiveAttr::Model
  include ActiveAttr::MassAssignment

  attribute :full_name
  attribute :email_address
  attribute :phone_number
  attribute :body

  attr_accessor :full_name, :email_address, :phone_number, :body

  validates_presence_of :full_name #, :email_address
  validates_format_of :email_address, :with => /^[-a-z0-9_+\.]+\@([-a-z0-9]+\.)+[a-z0-9]{2,4}$/i
  validates_length_of :body, maximum: 500
end
