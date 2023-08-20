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

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

// const Cart = () => {
//   const [state, dispatch] = useStoreContext();
//   const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

//   useEffect(() => {
//     if (data) {
//       stripePromise.then((res) => {
//         res.redirectToCheckout({ sessionId: data.checkout.session });
//       });
//     }
//   }, [data]);

//   useEffect(() => {
//     async function getCart() {
//       const cart = await idbPromise('cart', 'get');
//       dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
//     }

//     if (!state.cart.length) {
//       getCart();
//     }
//   }, [state.cart.length, dispatch]);

//   function toggleCart() {
//     dispatch({ type: TOGGLE_CART });
//   }

//   function calculateTotal() {
//     let sum = 0;
//     state.cart.forEach((item) => {
//       sum += item.price * item.purchaseQuantity;
//     });
//     return sum.toFixed(2);
//   }

//   function submitCheckout() {
//     getCheckout({
//       variables: { 
//         products: [...state.cart],
//       },
//     });
//   }

//   if (!state.cartOpen) {
//     return (
//       <div className="cart-closed" onClick={toggleCart}>
//         <span role="img" aria-label="trash">
//           🛒
//         </span>
//       </div>
//     );
//   }

//   return (
//     <div className="cart">
//       <div className="close" onClick={toggleCart}>
//         [close]
//       </div>
//       <h2>Shopping Cart</h2>
//       {state.cart.length ? (
//         <div>
//           {state.cart.map((item) => (
//             <CartItem key={item._id} item={item} />
//           ))}

//           <div className="flex-row space-between">
//             <strong>Total: ${calculateTotal()}</strong>

//             {Auth.loggedIn() ? (
//               <button onClick={submitCheckout}>Checkout</button>
//             ) : (
//               <span>(log in to check out)</span>
//             )}
//           </div>
//         </div>
//       ) : (
//         <h3>
//           <span role="img" aria-label="shocked">
//             😱
//           </span>
//           You haven't added anything to your cart yet!
//         </h3>
//       )}
//     </div>
//   );
// };

// export default Cart;

export default function Subscription(){
    const { loading, data } = useQuery(QUERY_ME);
    const { info } = useQuery(QUERY_ALL_PRODUCTS);
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
                        to="/subscriptions"
                        style={{
                          border: '2px solid gray',
                          backgroundColor: '#202020',
                          color: 'white',
                          padding: '2%',
                          width: '6rem',
                          height: '3rem',
                          fontSize: 'smaller',
                        }}>
                          Subscription
                      </button>
                      <button
                        className="rounded-lg"
                        to="/sign-up"
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
                        Change Name
                      </button>
                      <button
                        className="rounded-lg"
                        to="/sign-up"
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
                        Delete Account
                      </button>
                    </div>
    
                  {/* <div className="flex flex-row gap-4 items-center">
                    <p className=" rotate-90 text-gray-500">|</p>
                    <p className=" text-gray-500 text-sm">
                      Don't have a GoalHub account?
                    </p>
                    <p className=" rotate-90 text-gray-500">|</p>
                  </div> */}
                </div>
              </div>
            </section>
          </main>
        </div>
      );
}