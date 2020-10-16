import React, { createContext, useState } from 'react';
import { Component } from 'react';

export const PriceContext = createContext();

class PriceContextProvider extends Component {
    state = {
        price: 200
    }

    render() {
        return(
            <PriceContext.Provider value={{...this.state}}>
                {this.props.children}
            </PriceContext.Provider>
        );
    }
}

export default PriceContextProvider;