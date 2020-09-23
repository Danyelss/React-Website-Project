import React from 'react';
import chiuveta from '../components/images/chiuveta.jpg';
import { Link } from "react-router-dom";

const FirstPage = () => {
    return(
     <body>
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