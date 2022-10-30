import React, { useEffect, useState } from 'react'

/*
Cú pháp: useEffect(callback, deps);     trong đó deps (option)

1. useEffect(callback)
- được gọi mỗi lần re-render (thay đổi state)

2. useEffect(callback, [])
- được gọi duy nhất 1 lần sau lần mount đầu tiên

3. useEffect(callback, [deps])
- khi giá trị của count thay đổi => chạy callback

- Đặc điểm chung: đều chạy sau lần mount đầu tiên
*/

function Content() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    //1.useEffect(callback)
    // useEffect(() => {
    //     console.log("useEffect");
    // });

    //2.
    // useEffect(() => {
    //     console.log("useEffect []")
    // }, []);

    //3.
    useEffect(() => {
        console.log("useEffect []")
    }, [count]);

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count => count - 1);
    }


    const increment2 = () => {
        setCount2(count2 +1);
    }

    const decrement2 = () => {
        setCount2(count2 => count2 - 1);
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Tăng</button>
            <button onClick={decrement}>Giảm</button>

            <h1>Counter2: {count2}</h1>
            <button onClick={increment2}>Tăng</button>
            <button onClick={decrement2}>Giảm</button>

            {console.log("render")}
        </div>
    )
}

export default Content