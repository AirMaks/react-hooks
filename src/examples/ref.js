import React, {useState, useEffect, useRef} from 'react';


function App() {
  const [value, setValue] = useState('black');
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef('');


  useEffect(() => {
    renderCount.current++;
    console.log(inputRef.current.value);
  })

  useEffect(() => {
    prevValue.current = value 
  }, [value])

  const changeColor = () => {
    if(inputRef.current.style.color === "red") {
      inputRef.current.style.color = "black";
      setValue('black');
    } else {
      setValue('red');
      inputRef.current.style.color = "red";
    }
   
  };



  return (
    <div className="App">
      <h1>Render count: {renderCount.current}</h1>
      <h2>Prev state: {prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
      <button onClick={changeColor}>Change color</button>
    </div>
  );
}

export default App;
