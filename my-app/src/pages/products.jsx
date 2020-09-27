import React, {useState} from 'react';

import HeaderWCart from "../components/headerWCart";
import ContactButton from "../components/contactButton";
import ItemList from "../components/itemlist"

//* react hooks*//

const Products = () => {

    const cbChangePrice = (event) => {    // lasa doar o un checkbox checked pt price
        let cbs = document.getElementsByClassName("cbPrice");
        for (let i = 0; i < cbs.length; i++) {
            if( event.target.name !== cbs[i].name )
                cbs[i].checked = false;
        }
    }

    const cbChangeCategory = (event) => {    // lasa doar o un checkbox checked pt categorie
        let cbs = document.getElementsByClassName("cbCategory");
        for (let i = 0; i < cbs.length; i++) {
            if( event.target.name !== cbs[i].name )
                cbs[i].checked = false;
        }
    }

    const defaultCheck = () => {  // default All prices check 
        let ok = true;

        let cbs = document.getElementsByClassName("cbPrice");
        for( let i = 1; i < cbs.length; i++ )
            if( cbs[i].checked === true )
                ok = false;
        
        if( ok === true )
            cbs[0].checked = true;
    }

    const refreshPage = () =>{
        window.location.reload(false);
    }

    const [products,setProducts]=useState({modern: false, classic: false, vintage: false, antic: false});

    const onProductChange = (event) =>{
        cbChangeCategory(event); 
        for (const property in products ) {   // face false values din object cand checkbox e false
            if( event.target.name !== products[property].name )
                products[property] = false;
        }
        setProducts(Object.assign({},products,{[event.target.name]:event.target.checked}));
    }   
    
    const [prices,setPrices]=useState({all: true, p099: false, p199: false, p299: false, p399: false, p499: false});

    const onPriceChange = (event) =>{
        cbChangePrice(event); 
        for (const property in prices) {   // face false values din object cand checkbox e false
            if( event.target.name !== prices[property].name )
                prices[property] = false;
        }
        setPrices(Object.assign({},prices,{[event.target.name]:event.target.checked}));
    } 

    return(
        <body onLoad = {defaultCheck} >
    
        <HeaderWCart>Sinks</HeaderWCart>

        <div className="GeneralPageBody">

            <div>
                <h4>Show category:</h4>
                <form action="" method="get">
                    <input type="checkbox" name="modern" className="cbCategory" onChange={onProductChange} ></input>
                    <label for="modern">Modern  </label>
                    <input type="checkbox" name="classic" className="cbCategory" onChange={onProductChange}></input>
                    <label for="classic">Classic  </label>
                    <input type="checkbox" name="vintage" className="cbCategory" onChange={onProductChange}></input>
                    <label for="vintage">Vintage  </label>
                    <input type="checkbox" name="antic" className="cbCategory" onChange={onProductChange}></input>
                    <label for="antic">Antic</label>
                </form>
            </div>

            <div>
                <h4>Show price:</h4>

                <p id></p>

                    <input type="checkbox" id="defaultChecked" className="cbPrice" name="all" onChange={onPriceChange}></input>
                    <label for="all">All  </label>
                    <input type="checkbox" className="cbPrice" name="p099" onChange={onPriceChange}></input>
                    <label for="099">0 - 99  </label>
                    <input type="checkbox" className="cbPrice" name="p199" onChange={onPriceChange}></input>
                    <label for="199">100 - 199  </label>
                    <input type="checkbox" className="cbPrice" name="p299" onChange={onPriceChange}></input>
                    <label for="299">200 - 300  </label>
                    <input type="checkbox" className="cbPrice" name="p399" onChange={onPriceChange}></input>
                    <label for="399">300 - 399  </label>
                    <input type="checkbox" className="cbPrice" name="p499" onChange={onPriceChange}></input>
                    <label for="499">400 - 499</label>
            </div>
            
            <ItemList Category={products} Price={prices}></ItemList>

        </div>
            
            

            <footer><ContactButton/></footer>
        </body>
    )
}

export default Products;