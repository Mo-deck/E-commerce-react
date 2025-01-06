import React from 'react'

function ProductDetails() {
   const product = {
    
        "id": 1,
        "title": "Bag",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    
   }
  return (
   <div className="p-4 md:p-8">
    <button className="mb-4 bg-pink-600 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-700 transition-colors duration-200">
        ⬅ Go Back 
    </button>

    <h1 className="text-3xl font-bold mb-6">{product.title}</h1>
    <div className="md:flex">
        <div className="md:w-1/2 pr-4 mb-6 md:mb-0">
           <img className="w-full h-96 object-cover rounded-lg shadow-md"
            src={product.image} alt={product.title} /> 
        </div>
        <div className="md:w-1/2 pl-4">
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex justify-between items-center mb-4">
             <span className="text-pink-600 text-2xl font-semibold">${product.price.toFixed()}</span>
             <span className="text-gray-500">{product.stock > 0 ? `${product.stock} in stock`: "out of Stock"}</span>
          </div>
          <button className="bg-pink-600 text-white px-5 rounded-lg py-2 shadow hover:bg-pink-700 transition-colors duration-200">Add To Cart</button>
        </div>
    </div>
   </div>
  )
}

export default ProductDetails