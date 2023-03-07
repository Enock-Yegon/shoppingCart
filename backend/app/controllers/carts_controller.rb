class CartsController < ApplicationController
    # Routings
        get "/carts" do
            carts = Cart.all
            carts.to_json
        end
    
         # add cart
         post "/carts" do
            title = params[:title]
            price = params[:price]
            image = params[:image]
            quantity = params[:quantity]
            product = params[:product]
            user = params[:user]
    
            if(title.present? && price.present? && image.present? && quantity.present? && product.present? && user.present?)
                cart = Cart.create(title: title, price: price, image: image, quantity: quantity, product_id: product, user_id: user)
                if cart
                    message = {:succcess => "Cart created successfully!!"}
                    message.to_json
                else
                    message = {:error => "Error saving Cart!"}
                    message.to_json
                end
            else
                message = {:error => "All fields should be field!"}
                message.to_json
            end
        end
    
        # delete comment
        delete "/carts/:id" do
            count_carts = Cart.where(id: params[:id]).count() #Integer 2,3,4,5
            if count_carts>0
                cart = Cart.find(params[:id])
                cart.destroy
                message = {:succcess => "Cart deleted successfully!!"}
                message.to_json
    
            else
                message = {:error => "The Cart does not exist!"}
                message.to_json
            end
        end
    
    end