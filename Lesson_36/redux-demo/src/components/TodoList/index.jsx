import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from '../../Redux/actions/todoActions';

function TodoList() {
    const todos = useSelector((state) => state.todos);

    const [title, setTitle] = useState("");

    //Dùng để dispatch action
    const dispatch = useDispatch();

    //Xử lý thêm công việc
    const handleAddTodo = () => {
        if (title === "") {
            alert("Tiêu đề không được để trống")
            return;
        }

        //Dispatch event để tạo todo
        dispatch(addTodo(title))
        setTitle("")
    };

    //Xử lý xóa công việc
    const handleDeleteTodo = (id) => {
        //Confirm trước khi xóa
        const isDelete = window.confirm("Bạn có muốn xóa không?")
        if(isDelete) {
            dispatch(deleteTodo(id))
        }
    };
    
    return (
        <>
            <h2>TodoList</h2>

            <input  type="text" 
                    placeholder='Enter todo ...' 
                    value={title} 
                    onChange={e => setTitle(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add</button>
            
            <ul>
                {todos.length > 0 && todos.map(todo => (
                    <li key={todo.id}>
                        <span>{todo.title}</span>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>    
                    </li>
                ))}

                {todos.length === 0 && <li>Không có công việc nào trong danh sách</li>}
            </ul>
        </>
    )
}

export default TodoList