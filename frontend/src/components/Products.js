import React from "react";
import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
// import data from "./data";
import Navbar from "./Navbar";

function Products() {

  const [products, setProduct] = useState()
  // const [loading, setLoading] = useState(true)

  useEffect(()=>{
      fetch("/products", {
          method: "GET",
          headers: {
              Accept: "application/json"
          }
      })
      .then(r=>r.json())
      .then((response)=>{
          console.log(response)
          setProduct(response)
      })

  }, [])
// const Products = () => {
    return (
        <>
        <Navbar/>
                    <h1 className="text-center mt-3">All Items</h1>
                      <section className="py-4 container">
                        <div className="row justify-content-center">
                          {products && products.map((item, index)=>{
                      return(
                        <ItemCard 
                           image={item.image} 
                           title={item.title} 
                           desc={item.desc} 
                           price={item.price} 
                           item={item} 
                           key={index}
                        />
                    )
                  })}
                   

                </div>
               </section>  
                
        </>
    );
};

export default Products;
