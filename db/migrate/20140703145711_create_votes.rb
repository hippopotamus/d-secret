class CreateVotes < ActiveRecord::Migration
  def change
      create_table :votes do |t|
        t.integer :number
        t.belongs_to :secret
    end
  end
end
