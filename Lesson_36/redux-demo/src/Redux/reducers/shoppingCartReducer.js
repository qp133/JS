import { cartItems } from "../../components/ShoppingCart/data/Data";

const initialState = cartItems;

const shoppingCartReducer = (state = initialState, action) => {
    switch(action.type) {
        case "shoppingCart/addCountProduct" : {
            let currentItem = state.find(item => item.id === action.payload);
            let newCount = currentItem.count + 1;

            const newItem = state.map((item) => {
                if(item.id === action.payload) {
                    return {...item, count: newCount};
                }
                return item;
            })
            return newItem;
        }

        case "shoppingCart/subtractCountProduct" : {
            let currentItem = state.find(item => item.id === action.payload);
            let newCount = currentItem.count - 1;

            const newItem = state.map((item) => {
                if(item.id === action.payload) {
                    return {...item, count: newCount};
                }
                return item;
            })
            return newItem;
        }

        case "shoppingCart/deleteProduct" : {
            let newState = state.filter(item => item.id !== action.payload);
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default shoppingCartReducer;