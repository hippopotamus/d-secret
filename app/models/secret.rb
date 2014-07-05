class Secret < ActiveRecord::Base
  has_many :comments
end
