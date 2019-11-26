class CreateApartments < ActiveRecord::Migration[6.0]
  def change
    create_table :apartments do |t|
      t.string :street
      t.integer :user_id

      t.timestamps
    end
  end
end
