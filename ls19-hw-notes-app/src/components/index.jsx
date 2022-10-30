import React from 'react'
import { useState } from 'react'
import "./Box.css"

function Box() {

    let intitialColor = [
        '#3498db',
        '#9b59b6',
        '#e74c3c',
        '#2c3e50',
        '#d35400',
    ]

    const[colors, setColors] = useState(intitialColor)

    const addMoreBox = () => {
        setColors([...colors, ...intitialColor])      //Nôi 2 mảng lại với nhau

    }

    const deleteBox = (index) => {
        //filter: lọc mảng, trả về mảng mới, ko ảnh hưởng đến mảng ban đầu (ES6)
        let newColors = colors.filter((color, i) => i !== index);
        setColors(newColors);
    }

return (
    <div className="wrap">
        <h1> JS DOM</h1>
        <button id="btn" onClick={addMoreBox}>More boxes</button>
        <h4 id="score">
            Total box:<span className="points">{colors.length}</span>
        </h4>

        <div className="boxes">
            {colors.map((color, index) => (
                <div
                    key={index}
                    className="box"
                    style={{backgroundColor: color}}
                    onClick={() => deleteBox(index)}
                ></div>
            ))}
        </div>
    </div>
)
}

export default Box