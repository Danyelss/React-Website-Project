import React from 'react';

import HeaderWCart from "../components/headerWCart";
import ContactButton from "../components/contactButton";
import ItemList from "../components/itemlist"

const Products = () => {
    var Value = 299;
    
    return(
        <body>
    
        <HeaderWCart>Sinks</HeaderWCart>

        <div className="GeneralPageBody">

            <div>
                <h4>Show category:</h4>
                <form action="" method="get">
                    <input type="checkbox" name="modern" modern="2"></input>
                    <label for="modern">Modern  </label>
                    <input type="checkbox" name="classic" classic="2"></input>
                    <label for="classic">Classic  </label>
                    <input type="checkbox" name="vintage" vintage="2"></input>
                    <label for="vintage">Vintage  </label>
                    <input type="checkbox" name="antic" antic="2"></input>
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
        </div>
            
            <ItemList price={Value}></ItemList>
            

            <footer><ContactButton/></footer>

        </body>
    )
}

export default Products;