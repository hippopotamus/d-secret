class Secret < ActiveRecord::Base
  has_many :comments
  has_many :votes

  after_save :create_vote

  def create_vote
    Vote.create(secret_id: self.id)
  end

  def sum_of_votes
    numbers = []
    self.votes.each{ |vote| numbers << vote.number }
    numbers.inject(:+)
  end
end
