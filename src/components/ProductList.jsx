import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Productitem from './Productitem'
function ProductList() {

    const [products, setProducts] = useState([])

    useEffect(() =>{
        const fetchProducts = async () =>{
            const { data } = await axios.get("https://fakestoreapi.com/products");
            setProducts(data)
        };

        fetchProducts();
    }, []);
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        { products.length > 0 &&
            products.map((product) =>(
              <Productitem key={product.id} product={product} />
            ))
        }
    </div>
  )
}

export default ProductList