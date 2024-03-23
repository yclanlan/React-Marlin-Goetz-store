import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "../communicate/StateProvider";

function CheckoutProduct({ id, brand, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__brand'>{brand}</p>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <strong>$</strong>
                    <strong>{price}</strong>
                </p>
                
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>★</p>
                    ))}
                </div>
                <br/>
                {!hideButton && (
                    <button className="checkoutProduct__button" 
                    onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct