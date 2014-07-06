class CreateComments < ActiveRecord::Migration
  def change
      create_table :comments do |t|
        t.text :content
        t.belongs_to :secret
        
        t.timestamps
    end
  end
end
