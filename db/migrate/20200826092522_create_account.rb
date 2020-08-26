class CreateAccount < ActiveRecord::Migration[6.0]
  def self.up
    create_table :accounts do |t|
      t.integer :type, null: false, default: 1
      t.float :balance, null: false, default: 0.0
      t.float :interest_rate
      t.references :user

      t.timestamps
    end
  end

  def self.down
    drop_table :accounts
  end
end
