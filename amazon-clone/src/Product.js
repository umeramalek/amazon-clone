import React from 'react'
import './Product.css'

function Product({id,title,image,price,rating}) {
    // passing in objects to define them later
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
            <button> Add to Cart </button>
        </div>
    )
}

export default Product
