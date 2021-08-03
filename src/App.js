import React from 'react';
import Alert from './alert/Alert.js';
import { AlertProvider } from './alert/AlertContext.js';
import Main from './Main.js';


function App() {
    return (
        <AlertProvider>
            <div>
                <Main toggle={() => {}}/>
                <Alert />
            </div>  
        </AlertProvider>
    )
}

export default App;
