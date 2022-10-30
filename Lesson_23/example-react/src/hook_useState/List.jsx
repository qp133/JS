import React from 'react'
import { useState } from 'react'

// Thêm 1 nút “add” + 1 ô input để nhập text. Mỗi khi bấm nút thêm 1 thẻ <li> có nội dung là nội dung trong ô input vào cuối danh sách
// Thêm 1 nút “remove”. Chức năng để xóa thẻ <li> cuối cùng của danh sách
// Thêm 1 nút “Hide” trên đầu của danh sách <ul>.
// Khi bấm vào “Hide” thì <ul> sẽ ẩn. Đồng thời label của nút “Hide” => “Show”
// Và ngược lại Khi bấm vào “Show” thì <ul> sẽ hiện. Đồng thời label của nút “Show” => “Hide”
function List() {
    const [items, setItems] = useState(["item 1", "item 2", "item 3"])

    const [show, setShow] = useState(true);

    const [title, setTitle] = useState("");


    const addNewItem = () => {
        if(title === "") {
            alert("Tieu de khong duoc de trong")
            return;
        }
        setItems([...items, title]);
        setTitle("")
    }

    const removeItem = () => {
        if(items.length === 0)  return;
        let newItem = items.slice(0, items.length-1)
        setItems(newItem);
    }

    const handleShow = () => {
        setShow(!show);        
    }

    return (
        <>
            <h1>List</h1>

            <button onClick={handleShow}>{show ? "Hide" : "Show"}</button>

            <input type="text" />
            <button onClick={addNewItem}>Add</button>

            <button onClick={removeItem}>Remove</button>
            
            {show && 
                <ul>
                    {items.map((item,index) => <li></li> )}

                </ul>            
            }

        </>
    )
}

export default List