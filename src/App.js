import React, {useState} from 'react';



function App() {

  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(num1 + num2);

  function changeNum1(e) {
    console.log('some...');
    var newNum1 = +(e.target.value)
    setNum1(num1 = newNum1)
    setTotal(num2 + newNum1)
  }

  function changeNum2(e) {
    var newNum2 = +(e.target.value)
    setNum2(num2 = newNum2)
    setTotal(num1 + newNum2)
  }

  return (
    <div>
      <input value={num1} type="text" onChange={changeNum1} />
      <span> + </span>  
      <input value={num2} type="text" onChange={changeNum2}  />
      <span> = </span>
      <span>{total}</span>
    </div>
  )
}

export default App;



