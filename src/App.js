import React ,{ useEffect, useState }from "react";
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import Home from "./page/Home";
import Header from "./component/header/Header";
import Product from "./component/products/Product";
import Login from "./page/login";
import Checkout from "./page/CheckOut";
import Payment from "./page/payment";
import Order from "./page/Order";
import Footer from "./component/footer/Footer000";

import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

import { auth } from "./component/database/firebase"
import { useStateValue } from "./component/communicate/StateProvider";
import { StateProvider } from './component/communicate/StateProvider';
import reducer, { initialState } from './component/communicate/Reducer';


const promise = loadStripe( "pk_test_51OwPNyP2M6rQKNRRCn6X55fJZB4sJYCCgsM09pnHDKtZkdX4xNfHgJMxyXUfUZQENes223aGIjmOMbfCaa84QPxc00ikMzUtTm")
                          



function App() {

  const [{}, dispatch] = useStateValue();

  useEffect( () => { 
    // like if statement
    // will only run once when the app component loads
    auth.onAuthStateChanged(authUser=>{
      console.log('The User is >>>', authUser)
      if (authUser){
        // the user just logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
        type: 'SET_USER', 
        user: null
        })
      }
    })
  }, [])

  return (
    <BrowserRouter>

    <div className="app">
    
        <Routes>

              <Route path="/" element={
                  <React.Fragment> 
                      <Header />
                      <Home />
                      <Footer />
                  </React.Fragment>} 
              />

              <Route path="/login" element={
                  <React.Fragment> 
                  <Login />
                  </React.Fragment>} 
              />

               <Route path="/order" element={
              <React.Fragment> 
                  <Header />
                  <Order />
                 
              </React.Fragment>} />


              <Route path="/checkout" element={
              <React.Fragment> 
                <Header />
                <Checkout />
              </React.Fragment>} />

              <Route path="/payment" element={
              <React.Fragment> 
                  <Header />
                  <Elements stripe={promise}>
                    <Payment />
                  </Elements>
              </React.Fragment>} />

        </Routes>
    </div>

    </BrowserRouter>
 

  
  );
}

export default App;
