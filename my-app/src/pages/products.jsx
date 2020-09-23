import React, {useState} from 'react';

import HeaderWCart from "../components/headerWCart";
import ContactButton from "../components/contactButton";
import ItemList from "../components/itemlist"
//* react hooks*//

const Products = () => {

    const refreshPage = () =>{
        window.location.reload(false);
    }

    var Value = 299;
    const [products,setProducts]=useState({modern: false, classic: false, vintage: false, antic: false});
    console.log(products);

    const onProductChange = (event) =>{
        setProducts(Object.assign({},products,{[event.target.name]:event.target.checked}));
    }    

    return(
        <body>
    
        <HeaderWCart>Sinks</HeaderWCart>

        <div className="GeneralPageBody">

            <div>
                <h4>Show category:</h4>
                <form action="" method="get">
                    <input type="checkbox" name="modern" onChange={onProductChange} ></input>
                    <label for="modern">Modern  </label>
                    <input type="checkbox" name="classic" onChange={onProductChange}></input>
                    <label for="classic">Classic  </label>
                    <input type="checkbox" name="vintage" onChange={onProductChange}></input>
                    <label for="vintage">Vintage  </label>
                    <input type="checkbox" name="antic" onChange={onProductChange}></input>
                    <label for="antic">Antic</label>
                </form>
            </div>

            <div>
                <h4>Show price:</h4>

                <p id></p>

                <input type="checkbox" name="099" value="199" ></input>
                    <label for="099">0 - 99  </label>
                    <input type="checkbox" name="199" value="299"></input>
                    <label for="199">100 - 199  </label>
                    <input type="checkbox" name="299" value="399"></input>
                    <label for="299">200 - 300  </label>
                    <input type="checkbox" name="399" value="499"></input>
                    <label for="399">300 - 399  </label>
                    <input type="checkbox" name="499" value="599"></input>
                    <label for="499">400 - 499</label>
            </div>
            
            <ItemList category={products}></ItemList>

        </div>
            
            

            <footer><ContactButton/></footer>

        </body>
    )
}

export default Products;