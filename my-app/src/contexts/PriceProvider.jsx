import React, { createContext, useState } from 'react';
import { Component } from 'react';
import PriceContext from '../contexts/PriceContext';

const Car = props => (
    <Fragment>
        <h4>Cars:</h4>
        {/* Finally we can use data */}
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


class PriceContextProvider extends Component {
    state = {
        cars: {
            car001: { name: 'Honda', price: 100 },
            car002: { name: 'BMW', price: 150 },
            car003: { name: 'Mercedes', price: 200 }
        }
    };

    render() {
        return (
            <PriceContext.Provider
                value={{
                    cars: this.state.cars,
                    incrementPrice: selectedID => {
                        const cars = Object.assign({}, this.state.cars);
                        cars[selectedID].price = cars[selectedID].price + 1;
                        this.setState({
                            cars
                        });
                    },
                    decrementPrice: selectedID => {
                        const cars = Object.assign({}, this.state.cars);
                        cars[selectedID].price = cars[selectedID].price - 1;
                        this.setState({
                            cars
                        });
                    }
                }}
            >
                {this.props.children}
            </PriceContext.Provider>
        );
    }
}

export default PriceContextProvider;