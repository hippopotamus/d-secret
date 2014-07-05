class Secret < ActiveRecord::Base
  has_many :comments

  def degrade_juiciness
    self.juiciness -= ( Time.now - self.updated_at ) / 3600
    self.save
  end
end
