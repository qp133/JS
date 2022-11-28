/*
action (kiểu object) {
    type: kiểu hành đọng là gì (bắt buộc)
    payload: thông tin gửi để thay đổi state (optional)
}
*/

export const increment = () => {
    return {
        type: "counter/increment"
    }
}
export const decrement = () => {
    return {
        type: "counter/decrement"
    }
}

