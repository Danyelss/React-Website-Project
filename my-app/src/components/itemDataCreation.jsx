import React from 'react';

const itemStorageCreation = () =>{

    let selectedItems = Array(11).fill(0);
    let number = Array(1).fill(0);
    
    let itemsObject = {
        name: "Selected Items by customer",
        id: selectedItems,
        total: number
    } 

    let itemsObject_serialized = JSON.stringify(itemsObject);

    localStorage.setItem("SelectedItemStorage", itemsObject_serialized );
    return(
        <div/>
    )
}

export default itemStorageCreation;
