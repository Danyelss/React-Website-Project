import React from 'react';
import Database from "../components/database.json";
import White from "../components/images/white.jpg";
import Yellow from "../components/images/yellow.jpg";
import Blue from "../components/images/blue.jpg";
import Red from "../components/images/red.jpg";
import Green from "../components/images/green.jpg";
import Grey from "../components/images/grey.jpg";
import Black from "../components/images/black.jpg";
import Magenta from "../components/images/magenta.jpg";
import Orange from "../components/images/orange.jpg";
import Purple from "../components/images/purple.jpg";
import Brown from "../components/images/brown.jpg";

let images = [ White, Black, Green, Orange, Blue, Red, Purple, Magenta, Brown, Grey, Yellow ];

const BoughtItem = (props) =>{

    let itemsObject_serialized = localStorage.getItem("SelectedItemStorage");

    let backToData = JSON.parse(itemsObject_serialized);

    localStorage.setItem( "SelectedItemStorage", JSON.stringify(backToData) );

    console.log(props.item);
    return(
        <div></div>
    )

}

export default BoughtItem;