require 'faker'

15.times do
  Secret.create(content: Faker::Company.catch_phrase)
end

25.times do
  x = Secret.find_by_id((1..15).to_a.sample)
  x.comments << Comment.create(content: Faker::Company.bs)
end
