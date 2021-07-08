import React, {useState} from 'react';


function computeInitialState() {
  console.log('Some manipulations...');
  return Math.trunc(Math.random() * 10)
}

function App() {

  const [counter, setCounter] = useState(() => {
    return computeInitialState()
  });

  const [state, setState] = useState({
    title: 'Title',
    number: 21,
    words: ['react', 'redux', 'nuxt']
  })

  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  const changeTitle = () => {
    setState(prev => {
      return {
        ...prev,
        title: 'New title'
      }
    })
  }

  const addEl = () => {
    state.words.push(Math.trunc(Math.random() * 20))
    setState(prev => {
      return {
        ...prev
      }
    })
  }

  const removeEl = () => {
    state.words.pop()
    setState(prev => {
      return {
        ...prev
      }
    })
  }


  return (
    <div className="App">
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Remove</button> 
      <button onClick={changeTitle}>Change title</button>
      <button onClick={addEl}>Add el</button>

      <button onClick={removeEl}>Remove el</button>

      <pre>{JSON.stringify(state, null, 2)}</pre> 
    </div>
  );
}

export default App;
