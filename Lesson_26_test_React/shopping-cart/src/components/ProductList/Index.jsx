import React, { useState } from 'react'
import ProductItem from '../ProductItem'

function ProductList({onList, onAdd, onDec, onDelete}) {
    return (
        <div className="col-md-8">
            {onList.map((item) => (
                <ProductItem 
                    key={item.id}
                    id = {item.id}
                    name = {item.name}
                    image = {item.image}
                    count = {item.count}
                    price = {item.price}
                    size = {item.size}
                    onAdd = {onAdd}
                    onDec = {onDec}
                    onDelete = {onDelete}
                />
            ))}
        </div>
    )
}

export default ProductList