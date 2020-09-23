import React from 'react';
import CartImg from "../components/images/cart.png";


const HeaderWCart = (props) => {
    return(
      <header className="General-header">
               <p>{props.children}</p>
               <button className="HeaderCartIcon">
               <a href='/cart'>
                   <div className="circleHeaderIcon">
                       <img src={CartImg} className="ImgIcon" alt="Cart Icon"></img>
                    </div>
                </a>
               </button>
         </header>
    )
}

export default HeaderWCart;