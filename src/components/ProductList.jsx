import React from 'react'
import productsData from '../assets/productsData.json'
function ProductList() {

    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            productsData.map(product =>(
                <div className="border boder-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-200 ease-in">
                    <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />

                    <div className="p-4">
                        <h2 className="font-bold text-xl mb-2">{product.name}</h2>
                        <p className="text-gray-600 mb-4 truncate">{product.description}</p>
                        <div className="flex justify-between items-center">
                            <span className="text-blue-600 font-semibold">${product.price.toFixed()}</span>
                            <div className="text-sm text-gray-500">
                                {product.stock > 0 ? `${product.stock} in stock`: "out of stock"}
                            </div>
                        </div>
                        <div className="mt-4">
                            <span className="text-yellow-500">{"⭐".repeat(Math.round(product.rating))}</span>
                            <span className="text-gray-300">
                                {"*".repeat(Math.round(5-product.rating))}
                            </span>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ProductList