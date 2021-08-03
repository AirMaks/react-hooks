import React from 'react';
// import { useAlertToggle } from './alert/AlertContext';
import { useAlert } from './alert/AlertContext';


export default function Main() {

    const {toggle} = useAlert();
    return (
        <>
            <h1>Hello from context</h1>
            <button onClick={toggle}>Show alert</button>
        </>
    )
}