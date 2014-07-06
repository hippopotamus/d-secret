class CreateSecrets < ActiveRecord::Migration
  def change
    create_table :secrets do |t|
      t.text :content
      
      t.timestamps
    end
  end
end
