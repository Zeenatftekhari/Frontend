import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {
  const [orderData, setOrderData] = useState({});

  const fetchMyOrder = async () => {
    try {
      const userEmail = localStorage.getItem('userEmail');
      const response = await fetch("http://localhost:5000/api/auth/myOrderData", {
        credentials: 'include',
        origin: "http://localhost:3000/Login",
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: userEmail
        })
      });

      if (response.ok) {
        const data = await response.json();
        setOrderData(data.orderData);
      } else {
        console.error('Failed to fetch order data');
      }
    } catch (error) {
      console.error('Error fetching order data:', error);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className='container'>
        <div className='row'>
          {Object.keys(orderData).length !== 0 ? (
            orderData.order_data.map(([items, orderDate]) => (
              <div key={orderDate}>
                <div className='m-auto mt-5'>
                  {orderDate}
                  <hr />
                </div>
                {items.map((arrayData) => (
                  <div key={arrayData.id} className='col-12 col-md-6 col-lg-3'>
                    {/* Your card component */}
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p>No order data available</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
