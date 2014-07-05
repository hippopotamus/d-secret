get "/" do
  @secrets = Secret.all
  erb :'index'
end
