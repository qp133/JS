import React, { useState } from 'react'
import { cartItems } from '../../data/Data'
import BillInfo from '../Bill-Info/Index'
import ProductList from '../ProductList/Index'
import "./ShoppingCart.css"

function ShoppingCart() {
    const [products, setProducts] = useState(cartItems)

    const addCount = (id) => {
        const newProducts = products.map((p) => {
            if(p.id === id) {
                let newCount = p.count + 1;
                return {...p, count: newCount};
            }
            return p;
        })
        setProducts(newProducts);
    }

    const decCount = (id) => {
        const newProducts = products.map((p) => {
            if(p.id === id) {
                if(p.count <= 1) {
                    alert("Số lượng không thể nhỏ hơn 1")
                } else {
                    let newCount = p.count - 1;
                    return {...p, count: newCount};
                }
            }
            return p;
        })
        setProducts(newProducts);
    }

    const handleDelete = (id) => {
        if (window.confirm("Do you really want to delete this product?")) {
            const newProducts = products.filter((item) => item.id !== id);
            setProducts(newProducts);
        }
    }
    
    return (
        <div className="shopping-cart-container mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-4">
                            <h2>Shopping Cart</h2>
                        </div>
                    </div>
                </div>

                {products.length === 0 && (
                    <p className="fst-italic message" >Không có sản phẩm trong giỏ hàng</p>
                )}
                {products.length > 0 && (
                    <div className="row shopping-cart">
                        <ProductList 
                            onList = {products}
                            onAdd = {addCount}
                            onDec = {decCount}
                            onDelete = {handleDelete}
                        />
                        <BillInfo 
                            onList = {products}
                        />
                    </div>                        
                )}

            </div>
        </div>
    )
}

export default ShoppingCart