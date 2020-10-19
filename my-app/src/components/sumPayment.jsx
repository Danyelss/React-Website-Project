import React, { Fragment } from 'react';
import PriceContext from '../contexts/PriceContext';
import Cars from '../components/Cars';
import Car from '../components/Car';

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