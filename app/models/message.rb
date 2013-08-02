class Message
  include ActiveAttr::Model
  include ActiveAttr::MassAssignment

  attribute :full_name
  attribute :email_address
  attribute :phone_number
  attribute :message

  attr_accessor :full_name, :email_address, :phone_number, :message

  validates_presence_of :full_name, :message => 'What\'s your name?'
  validates_format_of :email_address, :with => /^[-a-z0-9_+\.]+\@([-a-z0-9]+\.)+[a-z0-9]{2,4}$/i, :message => 'What\'s your email address?'
  validates_length_of :message, maximum: 1000, :message => 'This form is limited to 1000 characters.'
end
