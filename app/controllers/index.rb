get '/' do
  get_session_id
  delete_degraded_votes
  @secrets = Secret.order_by_votes
  erb :index
end

get '/:secret_id' do
  @secret = Secret.find(params[:secret_id])
  @secret.votes.create(key: session[:id], number: 5) if vote_is_unique?(@secret)
  @comments = @secret.comments.order(created_at: :desc)
  erb :comments, :layout => false
end

get '/hotness/get' do
  votes = {}
  Secret.all.each{|secret|
    votes[secret.id] = secret.sum_of_votes
  }
  votes.to_json
end

get '/logout/now' do
  session.clear
  redirect '/'
end

post '/new' do
	Secret.create(content: params[:content])
end

post '/new_comment' do
  @secret = Secret.find(params[:id])
  @secret.comments.create(secret_id: params[:id], content: params[:comment])
  content_type :json
  Comment.last.to_json
end
