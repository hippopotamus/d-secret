class Vote < ActiveRecord::Base
  belongs_to :secret
  #validate :vote_is_unique, on: :create
  def degrade_votes
    self.number -= ( Time.now - self.updated_at ) / 500
    self.save
  end

  # def vote_is_unique
  #   self.class.where("secret_id = ? AND key = ?", self.secret_id, self.key).empty?
  # end DOESNT WORK ASK MATT
end
