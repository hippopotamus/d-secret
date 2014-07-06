get '/' do
  get_session_id
  @secrets = Secret.order_by_votes
  @votes = Vote.all
  @votes.each{ |vote| vote.degrade_votes }
  @secrets.each{ |secret| secret.destroy if secret.sum_of_votes <= 0 }
  erb :index
end

get '/:secret_id' do
  secret = Secret.find(params[:secret_id])
  secret.votes.create(key: session[:id], number: 1)
  @comments = secret.comments
  erb :comments, :layout => false
end

post '/new' do
	Secret.create(content: params[:content])
end

post '/new_comment' do
  Comment.create(content: params[:comment])
end
