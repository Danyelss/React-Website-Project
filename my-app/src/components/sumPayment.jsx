import React, { Fragment } from 'react';
import PriceContext from '../contexts/PriceContext';
import Car from '../components/Car';

/*
const Car = props => (
    <Fragment>
        <h4>Cars:</h4>
        {Object.keys(props.cars).map(carID => (
            <Car
                key={carID}
                name={props.cars[carID].name}
                price={props.cars[carID].price}
                incrementPrice={() => props.incrementCarPrice(carID)}
                decrementPrice={() => props.decrementCarPrice(carID)}
            />
        ))}
    </Fragment>
);
*/


const sumPayment = () => {
    return(
    <PriceContext.Consumer>
     {context => (
            <Fragment>
                <h4>Cars:</h4>
                {Object.keys(context.cars).map(carID => (
                    <Car
                        key={carID}
                        name={context.cars[carID].name}
                        price={context.cars[carID].price}
                        incrementPrice={() => context.incrementPrice(carID)}
                        decrementPrice={() => context.decrementPrice(carID)}
                    />
                ))}
            </Fragment>
        )}
    </PriceContext.Consumer>
    );
}

export default sumPayment;