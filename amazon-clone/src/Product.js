import React, { useState } from 'react'
import './Product.css'
import {useStateValue} from "./StateProvider"

function Product({id,title,image,price,rating}) {
    // passing in objects to define them later

    // dispatch - is how we manipulate data 
    // basket is the state of the app
    const [{ basket }, dispatch] = useStateValue();
    console.log('this is the basket >>> ', basket)

    const addToCart = () => {
        // dispatch the item into data layer
        dispatch({ //dispatch these attributes to the basket
            type: 'ADD_TO_BASKET',
            item: {
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })

    };


    return (
        <div className="product">
            <div className="product__info">
                <p> {title}</p>
                <p className="product__price"> 
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i) => (<p>🌟</p>))}
                </div>
            </div>

            <img src={image} alt=""/>
            <button onClick={addToCart}> Add to Cart </button>
        </div>
    )
}

export default Product
