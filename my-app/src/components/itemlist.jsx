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
import BoughtItem from "../components/boughtItem";

let images = [ White, Black, Green, Orange, Blue, Red, Purple, Magenta, Brown, Grey, Yellow ];

//let selectedItem = new Array(11).fill("0");
//selectedItem = localStorage.getItem("SelectedItemsA");
//console.log(selectedItem);


const ItemList = (props) => {
    const products = props.Category;
    const prices = props.Price;
    let min = 0;
    let max = 0;

    switch(true){
        case prices.all === true:
            min = 0;
            max = 499;
            break;
        case prices.p099 === true:
            min = 0;
            max = 99;
            break;
        case prices.p199 === true:
            min = 100;
            max = 199;
            break;
        case prices.p299 === true:
            min = 200;
            max = 299;
            break;
        case prices.p399 === true:
            min = 300;
            max = 399;
            break;
        case prices.p499 === true:
            min = 400;
            max = 499;
            break;
        default:
            min = 0;
            max = 499;
    }

    return(
        <div >
            { Database.map( item => {
                
                const test = () => {
                    alert("Item added.");

                    let itemsObject_serialized = localStorage.getItem("SelectedItemStorage");

                    let backToData = JSON.parse(itemsObject_serialized);

                    backToData.id[item.key] = backToData.id[item.key] + 1;

                    localStorage.setItem( "SelectedItemStorage", JSON.stringify(backToData) );

                    console.log(localStorage.getItem("SelectedItemStorage"));

                    return(
                        <BoughtItem item={item}></BoughtItem>
                    )
                }

                if( (products.modern === false && products.classic === false && products.vintage === false && products.antic === false) && ( item.price > min && item.price < max )){
                    return(
                        <div key={item.key} className="ProductSmallView">
                            <img src={images[item.key]} alt="Product"></img>

                            <div className="TextOverImage">
                                <h3>{ item.category }</h3>
                            </div>

                            <div className="PriceBuyContainter">
                                <h3> { item.price } RON </h3>
                                <button id={item.key} type="button" onClick={test} className="BuyCartButton">
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
                                <button id={item.key} type="button" onClick={test} className="BuyCartButton">
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