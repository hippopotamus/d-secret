get '/' do
  # Look in app/views/index.erb
  @secrets = Secret.all#order(:votes).reverse_order
  erb :index
end

get '/comments' do

  @comments = Secret.find(params[:secret_id]).comments
  erb :comments
end

