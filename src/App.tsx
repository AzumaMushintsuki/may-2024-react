import React, {FC} from 'react';
import './App.css';


function App () {


    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(console.log);
    return (
        <div>


        </div>

    );
}

export default App;
