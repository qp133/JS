const initialState = [
    { id: 1, title: "Làm bài tập"},
    { id: 2, title: "Đi chơi"},
    { id: 3, title: "Nấu ăn"}
];

//Random id
const randomId = () => {
    return Math.floor(Math.random() * 1000);
}

const todoReducer = (state = initialState, action) => {
    console.log(action);

    switch(action.type) {
        case "todo/addTodo" : {
            const newTodo = {
                id: randomId,
                title: action.payload
            }
            //Cập nhật và return state mới
            const newState = [newTodo, ...state];
            return newState;
        }
        case "todo/deleteTodo" : {
            const newState = state.filter(todo => todo.id !== action.payload);
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default todoReducer;