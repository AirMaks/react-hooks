import React, {useState, useCallback} from 'react';
import ItemsList from './itemsList';


function App() {

    

    const [count, setCount] = useState(1);
    const [colored, setColored] = useState(false);
    const styles = {
        color: colored ? 'darkred' : 'black'
    }

    const generateItemsFromAPI = useCallback(() => {
        return new Array(count).fill('').map((_,i) => `Element ${i + 1}`)
    }, [count])

    
    return(
        <>
            <h1 style={styles}>Кол-во элементов: {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Add</button>
            <button onClick={() => setColored(prev => !prev)}>Change</button>
            <ItemsList getItems={generateItemsFromAPI}/>
        </>
    )
    
}

export default App;
