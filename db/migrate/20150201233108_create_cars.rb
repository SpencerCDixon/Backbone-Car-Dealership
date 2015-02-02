class CreateCars < ActiveRecord::Migration
  def change
    create_table :cars do |t|
      t.string :make
      t.string :year

      t.timestamps null: false
    end
  end
end
