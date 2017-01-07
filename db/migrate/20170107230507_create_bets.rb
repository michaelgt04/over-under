class CreateBets < ActiveRecord::Migration[5.0]
  def change
    create_table :bets do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :set_number, null: false
      t.text :voter, null: false
      t.boolean :vote
      t.integer :count, default: 0
    end
  end
end
