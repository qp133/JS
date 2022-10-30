import React, { useState, useEffect } from 'react';
import TodoInput from '../TodoInput';
import TodoItem from '../TodoItem';
import todoApi from '../../api/todoApi';

function TodoList() {
  const[todos, setTodos] = useState([]);


    //Xử lý các side effect
  useEffect(() => {
      //async function dùng để lập trình bất đồng bộ
      const fetchTodos = async () => {
          let res = await todoApi.getTodos();
          console.log(res);

          setTodos(res.data);
      }
      fetchTodos();
    }, []);

    //Xử lý xóa công việc
    const handleDelete = async (id) => {
      try {
        console.log("parent: ", id);

        //Gọi API xóa phía server
        await todoApi.deleteTodo(id);
  
        //cập nhật trong state ban đầu
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
      } catch(e) {
        console.log(e);
      }
    }

    //Thêm công việc
    const handleAddTodo = async (title) => {
      try {
        console.log("parent: ", title)

        //Tạo object todo muốn tạo
        let newTodo = {
          title,
        }
  
        //Gọi API xóa phía server
        let res = await todoApi.createTodos(newTodo);
        console.log(res);
  
        //cập nhật trong state ban đầu
        const newTodos = [...todos, res.data];      //Spread Operator (ES6)
        setTodos(newTodos);
      } catch (e){
        alert(e.response.data.message)
      }
    }

  //Cập nhật tiêu đề công việc
  const handleUpdateTitleTodo = async (id) => {
    try {
      //Tìm kiếm công việc dựa trên id
      let currentTodo = todos.find(todo => todo.id === id);

      let newTitle = window.prompt("Enter new title: ", currentTodo.title);

      if(newTitle === null)   return;
      if(!newTitle) {
        alert("Tiêu đề không để trống");
        return;
      }

      const updatedTodo = {
        title: newTitle,
        status: currentTodo.status
      }
      let res = await todoApi.updateTodo(id, updatedTodo);
      console.log(res.data);
    
    //cập nhật trong state ban đầu
    const newTodos = todos.map((todo) => {
      if(todo.id === id) {
        return {...todo, title: newTitle};
      }
      return todo;
    })
    setTodos(newTodos);

    }  catch (e) {
      console.log(e)
    }
  }

  //Thay đổi trạng thái coogn việc
  const handleToggleStatus = async (id) => {
    try {
      //Tìm kiếm công việc dựa trên id
      let currentTodo = todos.find(todo => todo.id === id);

      const updatedTodo = {
        title: currentTodo.title,
        status: !currentTodo.status,
    };

      //Gọi API
      let res = await todoApi.updateTodo(id, updatedTodo);
      console.log(res.data);

      //Cập nhật trong state ban đầu
      const newTodos = todos.map((todo) => {
        if(todo.id === id) {
          return {...todo, status: !todo.status};
        }
      })
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
        <h1>TodoList Application</h1>

        <TodoInput onAddTodo={handleAddTodo}/>

        <ul>
            {todos.length === 0 && (
                <li>Không có công việc nào trong danh sách</li>
              )}
            {todos.length > 0 &&
              todos.map( (todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDelete={handleDelete}
                    onUpdateTitleTodo = {handleUpdateTitleTodo}
                    onToggleStatus = {handleToggleStatus}
              />
            ))}
        </ul>
    </div>
  )
}

export default TodoList;