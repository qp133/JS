import React, { useEffect, useState } from 'react'
import "./Counter.css"

function Counter() {
    const [count, setCount] = useState(0);
    // const [color, setColor] = useState("#333333");

    // useEffect(() => {
    //     let newColor = changeColor();
    //     setColor(newColor);
    // }, [count])

    const add = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const sub = () => {
        const newCount = count - 1;
        setCount(newCount);
    }

    const changeColor = () => {
        if(count > 0)   return ("green")
        if(count == 0)  return ("#333333")
        if(count < 0)   return ("red")
    }
    const color = changeColor();

return (
    <div className="main-container">
    <h1 className="title">Đếm số</h1>
    <h1 id="counter" style={{color: color}}>
        {count}
    </h1>
    <div className="btn-container">
        <button className="btn counterBtn prevBtn" onClick={() => sub()}>Trừ</button>
        <button className="btn counterBtn nextBtn" onClick={() => add()}>Cộng</button>
    </div>
    {/* Kiểm tra số lần render */}
    {console.log("render")}
</div>
  )
}

export default Counter