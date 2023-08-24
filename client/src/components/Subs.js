import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT, QUERY_ME, QUERY_ALL_PRODUCTS } from '../utils/queries';
import Auth from '../utils/auth';
import '../styles/globals.css';
import { useQuery } from '@apollo/client';
import { Navigate } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51NgGzoKCT9DQWm9OHmmFkVoIjMcOnfEgHKGzSpSyTDvPDfGUCapFqsrSwcLUOJ9W7UqUpNQtcr6UnznPf1J9hSF800j2ISzbbq');

const Subscription = () => {
    const [getCheckout, {data}] = useLazyQuery(QUERY_CHECKOUT);
    const query_me = useQuery(QUERY_ME);
    const query_products = useQuery(QUERY_ALL_PRODUCTS);
    


    useEffect(() => {
        if (data) {
          stripePromise.then((res) => {
            res.redirectToCheckout({ sessionId: data.checkout.session });
          })};
      }, [data]);

      function submitCheckout(pdata) {
        const {__typename, ...rest} = pdata
        getCheckout({
          variables: { 
            products: [rest],
          },
        });
      }

    if (!Auth.loggedIn()) {
        return <Navigate to="/" />;
    }

    if (query_me.loading) {
        return <div>Loading...</div>;
    }
    
    const products_arr = query_products.data.products;
    return (
        <div className="font-poppins">
            <section className="flex min-h-screen">
              <div className="flex flex-col justify-center items-center lg:-mt-20">
                <div>
                    <div className="flex flex-col gap-4 place-content-center">
                      <button className="rounded-lg"
                        onClick={() => submitCheckout(products_arr[0])}
                        style={{
                          border: '2px solid gray',
                          backgroundColor: '#202020',
                          color: 'white',
                          padding: '2%',
                          height: '8rem',
                          fontSize: 'smaller',
                        }}>
                          <div
        className=" text-white font-bold text-xl pb-8 font-poppins"
        style={{ height: '32rem' }}
    >
    <p>Plan: {products_arr[0].name}</p>
    <div>
    <div>Description: {products_arr[0].description}</div>
    <span>Price: $20</span> 
    </div>
    </div>
                      </button>
                      <button
                        className="rounded-lg"
                        onClick={() => submitCheckout(products_arr[1])}
                        style={{
                          border: '2px solid gray',
                          backgroundColor: '#202020',
                          color: 'white',
                          padding: '2%',
                          height: '10rem',
                          fontSize: 'smaller',
                        }}
                      >
                        <div
        className=" text-white font-bold text-xl pb-8 font-poppins"
        style={{ height: '32rem' }}
    >
    <h2>Plan: {products_arr[1].name}</h2>
    <div>
    <div>Description: {products_arr[1].description}</div>
    <span>Price: $30</span> 
    </div>
    </div>
                      </button>
                      <button
                        className="rounded-lg"
                        onClick={() => submitCheckout(products_arr[2])}
                        style={{
                          border: '2px solid gray',
                          backgroundColor: '#202020',
                          color: 'white',
                          padding: '2%',
                          height: '10rem',
                          fontSize: 'smaller',
                        }}
                      >
                        
    <div
        className=" text-white font-bold text-xl pb-8 font-poppins"
        style={{ height: '32rem' }}
    >
    <p>Plan: {products_arr[2].name}</p>
    <div>
    <div>Description: {products_arr[2].description}</div>
    <span>Price: $40</span> 
    </div>
    </div>
                      </button>
                    </div>
                </div>
              </div>
            </section>
        </div>
      );
}


export default Subscription;