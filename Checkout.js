import React from 'react';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import{Link} from "react-router-dom";
import Subtotal from './Subtotal';



function Checkout() {
 
    const [{basket}]= useStateValue();
   
    return (
        <div className="checkout">
          <div className="checkout__left">
           
            
            {basket?.length==0 ? (
            <div>
                <h2>Your Shopping basket is empty</h2>
                <p>You have no items in your basket.Please click "Add To Basket" icon to shop</p>
            </div>
             ) : (
              <div className="container">
                <h2 className="checkout__title">Your Shopping basket</h2>
                {basket.map(item =>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}

                    />
                ))}
                
              </div>
            )} 
          </div>
            {basket.length >0 && (
            <div className="checkout__right">
                <Subtotal/>
            </div>
            )}     

        </div>
            
        
        
    );
}

export default Checkout
