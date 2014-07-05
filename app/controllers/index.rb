get "/" do
  @secrets = Secret.all
  @comments =
  erb :'index'
end

get "/:sid/comments" do
  secret = Secret.find(params[:sid])
  @comments = secret.comments
  erb :'comments'
end
