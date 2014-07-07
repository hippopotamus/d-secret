class CreateUniquekeys < ActiveRecord::Migration
  def change
    create_table :uniquekeys do |t|
      t.string :key
    end
  end
end
