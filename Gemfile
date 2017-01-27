source 'https://rubygems.org'
ruby '2.0.0'

gem 'rails', '3.2.13'

# May need to add this back for Heroku issue.
# Problem solved with, but probably not necessary.
# gem 'sprockets', '2.2.2'
# Sass specification was also here, moved it down.

gem 'mobvious'
gem 'mobvious-rails'
gem 'jquery-rails', '2.0.2'
gem 'haml-rails'
gem 'active_attr'
gem 'newrelic_rpm'
# gem 'rack-mini-profiler'

group :development, :test do
  gem 'sqlite3', '1.3.5'
  gem 'rspec-rails', '2.11.0'
  gem 'letter_opener'
end

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails', '3.2.5'
  # Specified sass version to overcome deployment issue.
  gem 'sass', '3.2.7'
  gem 'coffee-rails', '3.2.2'
  gem 'uglifier', '1.2.3'
  gem 'asset_sync', '1.0.0'
  gem 'font_assets', '0.1.10'

  # Compass specific gems.
  gem 'compass-rails'
  gem 'oily_png'
  gem 'susy'
  gem 'sassy-buttons'
end

# See https://github.com/ndbroadbent/turbo-sprockets-rails3
# gem 'turbo-sprockets-rails3'

group :test do
  gem 'capybara', '1.1.2'
end

group :production do
  gem 'pg', '0.12.2'
end
