import React from "react";
import "./Product.css";
import { useStateValue } from "../communicate/StateProvider";


function Product({ id,  title, description, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        description: description,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
        <div className="product__brand">
           
            <p>{title}</p>
            
        </div>
        <br/>
      <div className="product__info">
      
     
        <p>{description}</p>
        <br/>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>★</p>
            ))}
        </div>
      </div>

      <div className="product__imageContainer">
      <img src={image} alt="" /></div>
      <br />

      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;