//Tăng số lượng
export const addCountProduct = (id) => {
    return {
        type: "shoppingCart/addCountProduct",
        payload: id
    }
}

//Giảm số lượng
export const subtractCountProduct = (id) => {
    return {
        type: "shoppingCart/subtractCountProduct",
        payload: id
    }
}

//Xóa sản phẩm
export const deleteProduct = (id) => {
    return {
        type: "shoppingCart/deleteProduct",
        payload: id
    }
}