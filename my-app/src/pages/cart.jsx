import React from 'react';
import HeaderWCart from '../components/headerWCart';
import ContactButton from "../components/contactButton";
import BoughtItem from '../components/boughtItem';


const Cart = () => {

    let selectedItemA = new Array(11);
    selectedItemA = localStorage.getItem("SelectedItemsA");
    console.log(selectedItemA);
    return(
        <body>
            <HeaderWCart>Cart</HeaderWCart>

            <div className="GeneralPageBody">

                <p>{selectedItemA}</p>

                <BoughtItem></BoughtItem>

            </div>

            <footer><ContactButton/></footer>

        </body>
    )
}

export default Cart;