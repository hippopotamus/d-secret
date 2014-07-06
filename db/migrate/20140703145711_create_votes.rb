class CreateVotes < ActiveRecord::Migration
  def change
      create_table :votes do |t|
        t.float :number
        
        t.belongs_to :secret
    end
  end
end
