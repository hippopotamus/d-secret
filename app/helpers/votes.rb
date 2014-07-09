helpers do
   def vote_is_unique?(secret)
    Vote.where("secret_id = ? AND key = ?", secret.id, session[:id]).empty?
  end

  def delete_degraded_votes
    Vote.all.each{ |vote| vote.degrade_votes }
    Secret.all.each do |secret|
      if secret.sum_of_votes <= 0
        Secret.delete(secret.id)
        secret.votes.all.each{|vote| Vote.delete(vote.id) }
      end
    end
  end
end
