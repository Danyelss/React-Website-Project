import React from 'react';
import HeaderWCart from '../components/headerWCart';
import ContactButton from "../components/contactButton";
import BoughtItem from '../components/boughtItem';


const Cart = () => {
    return(
        <body>
            <HeaderWCart>Cart</HeaderWCart>

            <div className="GeneralPageBody">

                <BoughtItem></BoughtItem>

            </div>

            <footer><ContactButton/></footer>

        </body>
    )
}

export default Cart;