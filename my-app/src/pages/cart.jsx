import React from 'react';
import HeaderWCart from '../components/headerWCart';
import ContactButton from "../components/contactButton";
import BoughtItem from '../components/boughtItem';
import Image from '../components/images/orange.jpg';
import Image2 from '../components/images/blue.jpg'



const Cart = () => {

    let selectedItemA = new Array(11);
    selectedItemA = localStorage.getItem("SelectedItemStorage");
    console.log(selectedItemA);
    return(
        <body>
            <HeaderWCart>Cart</HeaderWCart>

            <div className="GeneralPageBody">
            
            <div className="CartBody">
            
                <div className="CartProductsContainer">

                    <div className="CartItemContainer">

                        <div className="CartImageContainer">
                            <img src={Image} alt="plm"/>
                        </div>

                        <div className="CartQuantityAddRemoveContainer">
                        <p className="test">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Est quidem ex temporibus mollitia. Laborum facere eveniet 
                        id alias reiciendis ullam, aliquam dolore ipsum dignissimos 
                        molestiae quis assumenda molestias quisquam magni?</p>
                        <p className="test">{selectedItemA} </p>
                        </div>
                    </div>

                    <div className="CartItemContainer">

                        <div className="CartImageContainer">
                            <img src={Image2} alt="plm"/>
                        </div>

                        <div className="CartQuantityAddRemoveContainer">
                        <p className="test">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Est quidem ex temporibus mollitia. Laborum facere eveniet 
                        id alias reiciendis ullam, aliquam dolore ipsum dignissimos 
                        molestiae quis assumenda molestias quisquam magni?</p>
                        <p className="test">{selectedItemA} </p>
                        </div>
                    </div>
              
                </div>
                
                <div className="CartSumPayContainer">
                    <p>Total: 300</p>
                    <p>Button</p>
                </div>

            </div>

            </div>

            <footer><ContactButton/></footer>

        </body>
    )
}

export default Cart;