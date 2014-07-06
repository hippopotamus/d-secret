get '/' do
  @secrets = Secret.all#order(:votes).reverse_order
  @votes = Vote.all
  @votes.each do |vote|
    vote.degrade_votes
    vote.destroy if vote.number <= 0
  end
  erb :index
end

get '/:secret_id' do
  @comments = Secret.find(params[:secret_id]).comments
  erb :comments
end

post '/new' do
	Secret.create(content: params[:content])
end
