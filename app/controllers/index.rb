get "/" do
  @secrets = Secret.all
  erb :'index'
end

get "/:sid/comments" do
  @comments = Comment.where( secret_id: params[:sid] )
  erb :'comments'
end
