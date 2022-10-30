import React, {useState} from 'react'

function TodoInput({onAddTodo}) {
  // console.log(props);

  //Destructuring assignment(ES6)
  //const onAddTodo = props.onAddTodo     => Cách viết bthg
  // const {onAddTodo} = props;           => Cách viết gọn

  const[title, setTitle] = useState("");
  
  const handleAddTodo = () => {
    if(!title) {
      alert("Tiêu đề không được để trống");
      return
    }
    onAddTodo(title);
    setTitle("");
  }

  return (
    <div>
        <input
            type="text"
            placeholder='Enter todo...'
            value={title}
            onChange={e => setTitle = e.target.value}>
        </input>
        <button onClick={handleAddTodo}>Add</button>
    </div>
  )
}

export default TodoInput;