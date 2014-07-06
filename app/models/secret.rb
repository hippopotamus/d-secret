class Secret < ActiveRecord::Base
  has_many :comments
  has_many :votes

  after_save :create_vote

  def create_vote
    Vote.create(secret_id: self.id)
  end
end
