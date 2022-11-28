import React from 'react'
import BillInformation from './BillInfomation'
import ProductList from './ProductList'
import "./ShoppingCart.css"
import {useDispatch, useSelector} from 'react-redux'
import { addCountProduct, subtractCountProduct, deleteProduct } from '../../Redux/actions/shoppingCartActions'

function ShoppingCart() {
    //Lấy dữ liệu ra từ selector
    const shoppingCart = useSelector((state) => state.shoppingCart);

    //Dùng để dispatch action
    const dispatch = useDispatch();

    const addCount = (id) => {
        dispatch(addCountProduct(id))
    }

    const decCount = (id) => {
        let currentItem = shoppingCart.find(item => item.id === id);

        if(currentItem.count === 1) {
            alert("Số lượng không thể nhỏ hơn 1")
            return;
        } else {
            dispatch(subtractCountProduct(id))
        }
    }

    const handleDelete = (id) => {
        if (window.confirm("Do you really want to delete this product?")) {
            dispatch(deleteProduct(id));
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

                {shoppingCart.length === 0 && (
                    <p className="fst-italic message" >Không có sản phẩm trong giỏ hàng</p>
                )}
                {shoppingCart.length > 0 && (
                    <div className="row shopping-cart">
                        <ProductList 
                            onList = {shoppingCart}
                            onAdd = {addCount}
                            onDec = {decCount}
                            onDelete = {handleDelete}
                        />
                        <BillInformation 
                            onList = {shoppingCart}
                        />
                    </div>                        
                )}

            </div>
        </div>
    )
}

export default ShoppingCart