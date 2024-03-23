import React from 'react';
import './Home.css';
import Product from '../component/products/Product';
import data from '../component/data';
import footer from '../component/footer/Footer000';

function Home() {
  
  let bestSeller = data.slice(0,3);
  let candle = data.slice(4,10);
 

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="../image/M+G_Sephora_Brand_Room_Banner_Desktop_1280x250_1669892838.jpg"
        />

     <div className="product__section1">
        <div className="home__title">
          Best Seller
        </div>

        <div className="home__row_wrapper">
        {bestSeller.map(product => (
          <div key={product.id} className="home__row">
            <Product
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          </div>
        ))}

        </div>
      </div>

      <div className="product__section2">
        <div className="home__title">Candle</div>

        <div className="home__row_wrapper">
        {candle.map(product => (
          <div key={product.id} className="home__row">
            <Product
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          </div>
        ))}

        </div>
      </div>






      </div>
    </div>
  );
}

export default Home;
