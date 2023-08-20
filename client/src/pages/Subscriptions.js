import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT, QUERY_ME, QUERY_ALL_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
// import CartItem from '../CartItem';
import Auth from '../utils/auth';
// import { useStoreContext } from '../../utils/GlobalState';
// import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import '../styles/globals.css';
import { useQuery } from '@apollo/client';
import { Navigate } from 'react-router-dom';

const logout = (event) => {
    event.preventDefault();
    Auth.logout();
};
// TODO: query products and render them to the buttons/links to create the stripe session
// for the payment 
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

export default function Subscription(){
    const { loading, data } = useQuery(QUERY_ME);
    const { __, info } = useQuery(QUERY_ALL_PRODUCTS);
    if (!Auth.loggedIn()) {
        return <Navigate to="/" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    console.log(data);
    console.log(info);
    return (
        <div className=" font-poppins">
          <main className="flex justify-center bg-neutral-950">
            <section className="flex min-h-screen">
              <div className="flex flex-col justify-center items-center lg:-mt-20">
                <div
                  className="items-center w-100 h-100 border-2 rounded-2xl border-slate-200 px-14 py-5 gap-8"
                  style={{ backgroundColor: '#202020' }}
                >
                  <div className="flex flex-row justify-end text-right">
                    <button
                      onClick={logout}
                      to="/"
                      style={{
                        backgroundColor: '#202020',
                        color: 'white',
                        border: '1px solid white',
                        borderRadius: '15px',
                        width: '6rem',
                        height: '2.5rem',
                        fontSize: 'smaller',
                      }}
                    >
                      Log out
                    </button>
                  </div>
                    <div className="flex flex-row  gap-4">
                      <button className="rounded-lg"
                        href="/"
                        style={{
                          border: '2px solid gray',
                          backgroundColor: '#202020',
                          color: 'white',
                          padding: '2%',
                          width: '6rem',
                          height: '3rem',
                          fontSize: 'smaller',
                        }}>
                          Product #1
                      </button>
                      <a
                        className="rounded-lg"
                        href="/"
                        style={{
                          border: '2px solid gray',
                          backgroundColor: '#202020',
                          color: 'white',
                          padding: '2%',
                          width: '6rem',
                          height: '3rem',
                          fontSize: 'smaller',
                        }}
                      >
                        Product #2
                      </a>
                      <a
                        className="rounded-lg"
                        href="/"
                        style={{
                          border: '2px solid gray',
                          backgroundColor: '#202020',
                          color: 'white',
                          padding: '2%',
                          width: '6rem',
                          height: '3rem',
                          fontSize: 'smaller',
                        }}
                      >
                        Product #3
                      </a>
                    </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      );
}