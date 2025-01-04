import React from 'react'
import productsData from '../assets/productsData.json'
function ProductList() {

    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            productsData.map(product =>(
              
            ))
        }
    </div>
  )
}

export default ProductList