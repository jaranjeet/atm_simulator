class CreateUserAccount < ActiveRecord::Migration[6.0]
  def self.up
    create_table :user_accounts do |t|
       t.references :user
       t.references :account

       t.timestamps
    end
  end

  def self.down
    drop_table :user_accounts
  end
end
