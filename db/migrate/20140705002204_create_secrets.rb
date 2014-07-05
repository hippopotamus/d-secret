class CreateSecrets < ActiveRecord::Migration
  def change
    create_table :secrets do |t|
      t.string :content
      t.float :juiciness, default: 10

      t.timestamps
    end
  end
end
