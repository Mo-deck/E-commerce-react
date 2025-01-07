import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const { id } =  useParams()
   const [product, setProduct] = useState(null)

useEffect(() =>{
    const getProduct =async() =>{
        try {
            const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
            console.log(data);
            setProduct(data)
            
        } catch (error) {
            console.log(error);
            
        }
    }
    getProduct()
}, [id])
   
  return (
     <div className="p-4 md:p-8">
        <button className="mb-4 bg-pink-600 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-700 transition-colors duration-200">
            ⬅ Go Back 
        </button>
        <div className="md:flex">
            <div className="md:w-1/2 pr-4 mb-6 md:mb-0">
                <img className="w-full h-96 object-cover rounded-lg shadow-md"
                 src={product?.image} alt={product?.title} />
            </div>
            <div className="md:w-1/2 pl-4">
                <h1 className="text-3xl font-bold mb-6">{product?.title}</h1>
              <div className="flex justify-between items-center mb-4">
                  <span className="text-blue-600 font-semibold">${product?.price.toFixed()}</span>
              </div>
              <button className="bg-pink-600 text-white px-5 rounded-lg py-2 shadow hover:bg-pink-700 transition-colors duration-200">Add To Cart</button>
            </div>
        </div>
       </div>
  )
}

export default ProductDetails