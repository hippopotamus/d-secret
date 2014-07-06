class Secret < ActiveRecord::Base
  has_many :comments
  has_many :votes

  after_save :create_vote

  def create_vote
    Vote.create(secret_id: self.id )
  end

  def sum_of_votes
    numbers = []
    self.votes.each{ |vote| numbers << vote.number }
    numbers.inject(:+)
  end

  def self.order_by_votes
    self.all.sort_by{|secret| secret.sum_of_votes }.reverse
  end

end
