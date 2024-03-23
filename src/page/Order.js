// Order.js

import React from 'react';
import './Order.css';
import { useStateValue } from '../component/communicate/StateProvider';

function Order() {
    const [{ orders }] = useStateValue();
    console.log('orders:', orders);

    return (
        <div className="orders">
            <h2>Order History</h2>

            {orders && orders.length > 0 ? (
                orders.map((order, index) => (
                    <div key={index} className="order">
                        <div className="order__info">
                            <h3>Order Total: ${order.orderTotal}</h3>
                            <p>Number of items: {order.items.length}</p>
                        </div>

                        <div className="order__items">
                            {order.items.map(item => (
                                <div key={item.id} className="order__item">
                                    <img src={item.image} alt={item.title} />
                                    <div className="order__item-info">
                                        <h4>{item.title}</h4>
                                        <p>Price: ${item.price}</p>
                                    </div>
                                </div>
                                
                            ))}
                        </div>
                       
                    </div>
                ))
            ) : (
                <p>No order history available</p>
            )}
        </div>
    );
}

export default Order;
