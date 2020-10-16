import React from 'react';
import HeaderWCart from '../components/headerWCart';
import ContactButton from "../components/contactButton";
import BoughtItem from '../components/boughtItem';
import SumPayment from '../components/sumPayment';
import PriceContextProvider from '../contexts/PriceContext';

const Cart = () => {
    return(
        <body>
            <HeaderWCart>Cart</HeaderWCart>

            <div className="GeneralPageBody">
            
            <div className="CartBody">

                <PriceContextProvider>
            
                <div className="CartProductsContainer">

                <BoughtItem/>

                </div>
                
                <div className="CartSumPayContainer">
                    <SumPayment/>
                </div>

                </PriceContextProvider>

            </div>

            </div>

            <footer><ContactButton/></footer>

        </body>
    )
}

export default Cart;