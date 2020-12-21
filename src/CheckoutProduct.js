import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct( {id, image, title, price, rating}) {
    
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
       })
    } 
    
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" 
                src={ image } alt={ title }/>
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_,i) => (
                    <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>
                <p>remove</p>
                </button>
            </div>
        </div>
    )
}

export default CheckoutProduct
