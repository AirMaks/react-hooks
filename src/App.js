import React, {useEffect, useState} from 'react';

function useLogger(value) {
    useEffect(() => {
        console.log('value changed');
    }, [value])
}


function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChange = e => {
        setValue(e.target.value);
    }

    const clear = () => setValue('');

    return {
        bind: {value, onChange},
        value, clear
    }

}



function App() {

    const input = useInput('');

    useLogger(input.value);

    return (
        <div>
            <input type="text" {...input.bind}/>
            <button onClick={() => input.clear()}>Clear</button>
            <h1>{input.value}</h1>
        </div>
    )
   
}

export default App;
