class Vote < ActiveRecord::Base
  belongs_to :secret

  def degrade_votes
    self.number -= ( Time.now - self.updated_at ) / 3600
    self.save
  end
end
