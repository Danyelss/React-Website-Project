import { data } from 'jquery';
import React from 'react';
import Database from "./database.json";

const itemStorageCreation = () =>{

    let selectedItems = Array(11).fill(0);
    
    let itemsObject = {
        name: "Selected Items by customer",
        id: selectedItems,
        total: 0
    } 

    console.log(itemsObject);

    let itemsObject_serialized = JSON.stringify(itemsObject);

    localStorage.setItem("SelectedItemStorage", itemsObject_serialized );
    return(
        <div/>
    )
}

export default itemStorageCreation;
