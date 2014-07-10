helpers do

  def datetime_am_pm(time)
    time = time.in_time_zone('Eastern Time (US & Canada)')
    if time.strftime("%I:%M%p")[0] == "0"
      return "at " + time.strftime("%I:%M%p")[1..-1]
    end
    "at " + time.strftime("%I:%M%p")
  end


  def date_format(date)
    date.strftime("%m/%d/%Y")
  end
end
