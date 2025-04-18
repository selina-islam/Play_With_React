import React from 'react'

function DataRendering() {
        const productsList = [
                {
                        name: 'Bitter Gourd',
                        id: 1,
                        isFruit: false
                },
                {
                        name: 'Sponge Gourd',
                        id: 2,
                        isFruit: false
                },
                {
                        name: 'Apple',
                        id: 3,
                        isFruit: true
                }
        ]
  return (
          <div>
                  {productsList.map((product) => (  // if we use {} curly braces then we use to return this function must
                          <ul key={product.id}>
                                  <li className={`${product.isFruit ? 'text-green-500': 'text-cyan-600'}`}>{ product.name}</li>
                          </ul>
                  ))}
    </div>
  )
}

export default DataRendering