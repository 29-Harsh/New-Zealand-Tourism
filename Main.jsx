import React from 'react';
import {Route, Switch} from "react-router-dom"
import About from "./About"
import App from "./Contact"


const Main = () =>{
  return(
    <>
    <About />,
    <App />
  )
}
export default Main()
