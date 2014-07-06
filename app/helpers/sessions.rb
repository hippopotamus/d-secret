helpers do

  def has_session?
    session[:id]
  end

  def get_session_id
    if !has_session?
      session[:id] = unique_id
    else
      p "TEAM TUGS_ON_DONG IS THE GREATEST, ONE"
      session[:id]
    end
  end

  def unique_id
    Uniquekey.create.key
  end
end
