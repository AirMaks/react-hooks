import React, {useState, useMemo, useEffect} from 'react';


function complexCompute(num) {
    console.log('complex computed');
    let i = 0;
    while(i < 10000) i++;
    return num * 2;
}
function App() {

    

    const [number, setNumber] = useState(42);
    const [colored, setColored] = useState(false);
    const styles = useMemo(() => ({
        color: colored ? 'darkred' : 'black'
    }), [colored])
    const computed = useMemo(() => {
        return complexCompute(number);
    }, [number])

    useEffect(() => {
        console.log('styles changed');
    }, [styles])
    
    return(
        <>
            <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
            <button onClick={() => setNumber(prev => prev + 1)}>Add</button>
            <button onClick={() => setNumber(prev => prev - 1)}>Remove</button>
            <button onClick={() => setColored(prev => !prev)}>Change color</button>
        </>
    )
    
}

export default App;
