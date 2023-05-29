import React from 'react';
import './styles/App.css';
import GetProducts from "./Components/GetProducts";
import classes from "./Components/Products.module.css";
import Products from "./Components/Products";

function App() {



  return (
    <div className="App">


        <hr/>
        <GetProducts/>
    </div>
  );
}

export default App;
