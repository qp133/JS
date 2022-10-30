import React from 'react'

//Props là 1 object chứa data nhận từ component cha
// function Child({name, age, numbers}) {    => Cách 1: lấy trực tiếp từ parameters
function Child(props) {
  // console.log(props);
  const {name, age, numbers, onHello, onRandom} = props;   // => Cách 2: destructuring assignment (ES6)

  const handleRandom = () => {
    let rdNumber = Math.floor(Math.random() * 1000);
    onRandom(rdNumber);
  }
  return (

    // <div>
    //     <h1>{props.name}</h1>
    //     <h1>{props.age}</h1>
    //     <h1>{props.numbers}</h1>
    // </div>

      <div>
          <h1>{name}</h1>
          <h1>{age}</h1>
          <h1>{numbers}</h1>
          <button onClick={onHello}>Click me</button>
          <button onClick={handleRandom}>Random</button>
      </div>
  )
}

export default Child