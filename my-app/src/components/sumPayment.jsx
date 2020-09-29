import React from 'react';

const sumPayment = () => {
    let itemsObject_serialized = localStorage.getItem("SelectedItemStorage");

    let backToData = JSON.parse(itemsObject_serialized);

    return(
        <div>
            <p>{backToData.total} RON</p>
            <a href='/payment'>
                <button className="ContactButton">Proceed to payment</button>
            </a>
        </div>
    )
}

export default sumPayment;