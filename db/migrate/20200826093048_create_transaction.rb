class CreateTransaction < ActiveRecord::Migration[6.0]
  def self.up
    create_table :transactions do |t|
      t.timestamps
      t.float :amount
      t.references :account
    end
  end

  def self.down
    drop_table :transactions
  end
end
