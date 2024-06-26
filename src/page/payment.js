import React, { useState } from 'react';
import './Payment.css';
import { useStateValue } from "../component/communicate/StateProvider";
import CheckoutProduct from "../component/products/CheckoutProduct";
import { Link,useNavigate} from "react-router-dom";
import { CardElement } from "@stripe/react-stripe-js";

import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../component/communicate/Reducer";

function Payment() {
    const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();
  
  const [error, setError] = useState(null);

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [isCardValid, setIsCardValid] = useState(false);
  
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);


    const handleSubmit =(e) => {
    e.preventDefault(); 


  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
    setIsCardValid(e.complete);
  };

  const ConsoleAmount = (e) =>{
    e.preventDefault();
    alert("Thank you for shopping with us. We’ll send a confirmation when your items ship.");

    const orderData = {
        orderTotal: getBasketTotal(basket),
        items: basket.map(item => ({
          id: item.id,
          title: item.title,
          image: item.image,
          price: item.price,
          rating: item.rating
        }))
      };

      console.log("Order data:", orderData);

      dispatch({
        type: 'ADD_ORDER',
        order: orderData
      });

      dispatch({
        type: 'EMPTY_BASKET'
    });

    navigate('/order');
  
     
  }

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (
          <Link to='/checkout'>{basket?.length} items</Link>)
        </h1>



        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>370 React Street</p>
            <p>Brooklyn, NY</p>
          </div>
        </div>





        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review Items and Delivery</h3>
          </div>
          <div className='payment__items'>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>



        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>

          <div className='payment__details'>
            <form onSubmit={handleSubmit}>

              <CardElement className="payment__cardElement" onChange={handleChange} />
              <br/>
              <div className='payment__priceContainer'>
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <br />
                <button 
                onClick={ConsoleAmount} 
                disabled={!isCardValid || disabled || succeeded}
                className={isCardValid ? "clickable-button" : "disabled-button"}
                >
                 Buy Now
                </button>
                
              </div>
              <br/>
                  {/* Errors */}
                  {error && <div>{error}</div>}
            </form>
          </div>
        </div>

 
      </div>
    </div>
  );
}

export default Payment;