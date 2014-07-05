get "/" do
  @secrets = Secret.all.reverse
  
  @secrets.each do |secret|
    secret.degrade_juiciness
    secret.destroy if secret.juiciness <= 0
  end
  erb :'index'
end

post "/comments/:sid" do
  @secret = Secret.find(params[:sid])
  @comments = @secret.comments
  erb :'comments'
end

post "/new_secret" do
  Secret.create( content: params[:content] )
  redirect "/"
end

post "/new_comment/:sid" do
  Comment.create(comment: params[:comment], secret_id: params[:sid])
  redirect "/"
end
