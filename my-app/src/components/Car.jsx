import React, { Fragment } from 'react';
import PriceContext from '../contexts/PriceContext';

const Car = props => (
    <Fragment>
        <p>Name: {props.name}</p>
        <p>Price: ${props.price}</p>
        <button onClick={props.incrementPrice}>&uarr;</button>
        <button onClick={props.decrementPrice}>&darr;</button>
    </Fragment>
)

export default Car;