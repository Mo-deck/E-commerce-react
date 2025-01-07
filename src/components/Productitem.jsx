import React from 'react'
import { Link } from 'react-router-dom'

const Productitem = ({product}) => {
  return (
    <Link  to={`/product-details/${product.id}`}
     className="border boder-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-200 ease-in">
    
    <img className="w-full h-48 object-cover mt-4" src={product.image} alt={product.name} />

    <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4 truncate">{product.description}</p>
        <div className="flex justify-between items-center">
            <span className="text-blue-600 font-semibold">${product.price.toFixed()}</span>
        </div>
    </div>
</Link>
  )
}

export default Productitem