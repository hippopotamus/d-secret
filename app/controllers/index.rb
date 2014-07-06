get '/' do
  @secrets = Secret.all#order(:votes).reverse_order
  erb :index
end

get '/:secret_id' do
  @comments = Secret.find(params[:secret_id]).comments
  erb :comments
end

post '/new' do 
	Secret.create(content: params[:content])

end

