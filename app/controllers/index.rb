get "/" do
  @secrets = Secret.all
  erb :'index'
end

post "/comments/:sid" do
  secret = Secret.find(params[:sid])
  @comments = secret.comments
  erb :'comments'
end
