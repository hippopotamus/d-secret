get '/' do
  @secrets = Secret.all
  @votes = Vote.all
  @votes.each{ |vote| vote.degrade_votes }
  @secrets.each{ |secret| secret.destroy if secret.sum_of_votes <= 0 }
  erb :index
end

get '/:secret_id' do
  @comments = Secret.find(params[:secret_id]).comments
  erb :comments, :layout => false
end

post '/new' do
	Secret.create(content: params[:content])
end

post '/new_comment' do
  Comment.create(content: params[:comment])
end
