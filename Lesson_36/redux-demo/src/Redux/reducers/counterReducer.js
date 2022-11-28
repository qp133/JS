// - Reducer (write): Dựa vào state hiện tại và action gửi lên -> quyết định xem thay đổi state như thế nào
// - State: quản lý data (read only)

// Chú ý: Code trong phần Reducer phải đồng bộ (k xuất hiện lập trình bất đồng bộ)
const initialState = 0;

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case "counter/increment" : {
            return state +1;
        }
        case "counter/decrement" : {
            return state -1;
        }
        default: {
            return state;
        }
    }
}

export default counterReducer;