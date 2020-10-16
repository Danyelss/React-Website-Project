import React, { Component } from 'react';
import { PriceContext } from '../contexts/PriceContext';

class sumPayment extends Component {
    //let itemsObject_serialized = localStorage.getItem("SelectedItemStorage");

   // let backToData = JSON.parse(itemsObject_serialized);

    static contextType = PriceContext;

    render() {
        console.log(this.context.price)
        return(
            <div>
                <p>{this.context.price} RON</p>
                <a href='/payment'>
                    <button className="ContactButton">Proceed to payment</button>
                </a>
            </div>
        )
    }
}

export default sumPayment;