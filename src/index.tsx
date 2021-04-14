import One from "./one"
import "./index.css"
import  ReactDOM from 'react-dom';
import React from 'react'
import { App } from "./App"

console.log("Hello World")
console.log(One)

ReactDOM.render(
    <React.StrictMode>
        <div>Hi I am from react!</div>
        <App />
    </React.StrictMode>
    , document.getElementById('root'))


