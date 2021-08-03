import React from 'react';
// import { useAlertToggle } from './alert/AlertContext';
import { useAlert } from './alert/AlertContext';


export default function Main() {

    const {show} = useAlert();
    return (
        <>
            <h1>Hello from context</h1>
            <button onClick={() => show('Hello useReducer')}>Show alert</button>
        </>
    )
}