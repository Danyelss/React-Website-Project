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

//                if( products.modern === false && products.classic === false && products.vintage === false && products.antic === false ){
//                    ) && ( ( ( item.name === products.modern ) && products.modern ) || ( ( item.name === products.classic ) && products.classic ) || ( ( item.name === products.vintage ) && products.vintage ) || ( ( item.name === products.antic ) && products.antic ) )



const ItemList = (props) => {
    const products = props.category;
    
    return(
        <div>
            { Database.map( item => {
                console.log((item.category==="modern")&&products.modern);
                

                if( products.modern === false && products.classic === false && products.vintage === false && products.antic === false ){
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
                    if(   ( ( item.category === "modern" ) && products.modern ) || ( ( item.category === "classic" ) && products.classic ) || ( ( item.category === "vintage" ) && products.vintage ) || ( ( item.category === "antic" ) && products.antic ) )
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
            } )
            }
        </div>
    )
}

export default ItemList;