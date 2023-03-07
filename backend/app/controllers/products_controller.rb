class ProductsController < ApplicationController
    # Routings
    # Get all post
        get "/products" do
            products = Product.all
            products.to_json 
            # (include: [:user, :ratings])
         end

        #  get single Product
        get "/products/:id" do
            count_products = Product.where(id: params[:id]).count() #Integer 2,3,4,5
            if count_products>0
                products = Product.find_by(id: params[:id])
                products.to_json
            else
                message = {:error => "Product do not exist"}
                message.to_json
            end
         end

        # add product
         post "/products" do
            title = params[:title]
            price = params[:price]
            image = params[:image]

            if(title.present? && price.present? && image.present?)
                product = Product.create(title: title, price: price, image: image)
                if product
                    message = {:succcess => "Product saved successfully!!"}
                    message.to_json
                else
                    message = {:error => "Error saving product!"}
                    message.to_json
                end
            else
                message = {:error => "All fields should be field!"}
                message.to_json
            end
        end


        patch '/products/:id' do
            check_product_exists = Product.exists?(id: params[:id])
            if check_product_exists
                title = params[:title]
                price = params[:price]
                image = params[:image]
                if(title.present? && price.present? && image.present?)
                    product = Product.find_by(id: params[:id])
                    product.update(title: title, price: price, image: image)
                    message = {:success => "Product was updated successfully!"}
                    message.to_json
                else
                    message = {:error => "All fields must be filled!!"}
                    message.to_json
                end
            else
                message = {:error => "Product does not exist!!"}
                message.to_json
            end
        end


           #delete club
    delete '/products/:id' do
        count_products = Product.where(id: params[:id]).count()
        if count_products > 0
            product = Product.find(params[:id])
            product.destroy
            message = {:success => "Product was deleted successfully!"}
            message.to_json
        else
            message = {:error => "Product does not exist!!"}
            message.to_json
        end
    end
end