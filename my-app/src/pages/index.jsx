import React from 'react';
import chiuveta from '../components/images/chiuveta.jpg';
import { Link } from "react-router-dom";
import ItemData from "../components/itemDataCreation";

const FirstPage = () => {

    return(
     <body onLoad={ItemData}>
       <ItemData/>
      <header className="App-header">
            <img src={chiuveta} alt="screenshot" />
        <p>
          The reason behind.
        </p>
        <Link className="Link" to="/products">Proceed to sink(s).</Link>
        </header>
    </body>
    )
}

export default FirstPage;