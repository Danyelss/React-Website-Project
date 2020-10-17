import React, { useState }  from 'react';
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

const BoughtItem = () => {

    let itemsObject_serialized = localStorage.getItem("SelectedItemStorage");

    let backToData = JSON.parse(itemsObject_serialized);

    localStorage.setItem( "SelectedItemStorage", JSON.stringify(backToData) );
    
    const [number, setNumber] = useState( backToData );

        return(
            <div>
                { Database.map( item => {

                    const MinusItem = (event) => {
                        setTotal(event);
                        setNumber( Object.assign({},number,{[event.target.id]: number.id[event.target.id] = number.id[event.target.id] - 1 }));

                        localStorage.setItem( "SelectedItemStorage", JSON.stringify(number) );
                    }

                    const PlusItem = (event) => {
                        setTotal(event);
                        setNumber( Object.assign({},number,{[event.target.id]: number.id[event.target.id] = number.id[event.target.id] + 1 }));

                        localStorage.setItem( "SelectedItemStorage", JSON.stringify(number) );
                    }

                    const RemoveItem = (event) => {
                        setTotal(event);
                        setNumber( Object.assign({},number,{[event.target.id]: number.id[event.target.id] = 0 }));

                        localStorage.setItem( "SelectedItemStorage", JSON.stringify(number) );
                    }

                    const setTotal = (event) => {
                        localStorage.setItem( "SelectedItemStorage", JSON.stringify(number) );

                    }

                    if( number.id[item.key] > 0)
                    return(
                    <div className="CartItemContainer">

                                    <div className="CartImageContainer">
                                        <img src={images[item.key]} alt="Item"/>
                                    </div>

                                    <div className="CartQuantityAddRemoveContainer">
                                    <h4>{item.name}</h4>
                                    <input type="button" value="-" id={item.key} onClick={MinusItem}/>
                                    <input type="number" id={item.key} value={number.id[item.key]} name="ItemQuantity"/> 
                                    <input type="button" value="+" id={item.key} onClick={PlusItem}/>
                                    <p className="inLine"> buc</p>

                                    <button className="ContactButton" id={item.key} onClick={RemoveItem}>Remove</button>
                                    </div>
                        </div>
                    )
                })
            }
            </div>
        );
}

export default BoughtItem;