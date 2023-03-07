class CreateCarts < ActiveRecord::Migration[7.0]
  def change
    create_table :carts do |t|
      t.string :title
      t.integer :price
      t.string :image
      t.integer :quantity
      t.references :user ,foreign_key: true
      t.references :product, foreign_key: true

      t.timestamps
    end
  end
end
