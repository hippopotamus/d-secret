helpers do
   def vote_is_unique?(secret)
    Vote.where("secret_id = ? AND key = ?", secret.id, session[:id]).empty?
  end
end
