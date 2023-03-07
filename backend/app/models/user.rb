class User < ActiveRecord::Base
    has_many :carts
    belongs_to :product
end