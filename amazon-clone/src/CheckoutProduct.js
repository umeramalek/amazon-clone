import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title, price, rating}) {

  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove items from the cart
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }


  return (
    <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={image}/>

        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            
            <div className="checkoutProduct__rating">
                {/* we have an array, and a rating and map through the rating(times) of the array  */}
                {/* its creating an array with 5 index and mapping through the array 5 times */}
                {/* the _ and (i-index) in map is telling to leave the first index in the array blank which is 0 */}
                {Array(rating).fill().map((_,i) => (<p>🌟</p>))}
            </div>

            <button onClick={removeFromBasket}>Remove from Cart</button>
 
        </div>

    </div>
  )
}

export default CheckoutProduct