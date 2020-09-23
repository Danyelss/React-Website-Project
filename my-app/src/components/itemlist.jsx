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
import CartImg from "../components/images/cart.png";

let images = [ White, Black, Green, Orange, Blue, Red, Purple, Magenta, Brown, Grey, Yellow ];

const ItemList = (props) => {
    console.log(props.value);
    return(
        <div>
            { Database.map( item => {

                if( (item.price <= props.price && item.price >= ( (props.price % 100 ) * 100 ))){
                    return(
                        <div key={item.key} className="ProductSmallView">
                            <img src={images[item.key]} alt="Product"></img>

                            <div className="TextOverImage">
                                <h3>{ item.category }</h3>
                            </div>

                            <div className="PriceBuyContainter">
                                <h3> { item.price } RON </h3>
                                <button type="button" onClick="" className="BuyCartButton">
                                    <img src={CartImg} className="CartImgIcon" alt="Buy Cart Icon"></img>
                                </button>
                            </div>
                         </div>
                    )
                }
                else{
                    return( 
                        <div></div>
                    )
                }
            } )
            }
        </div>
    )
}

export default ItemList;