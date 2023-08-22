import React from 'react';
import Nav from '../components/navBar';
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_ALL_PRODUCTS } from '../utils/queries';
import Auth from '../utils/auth';
import { Navigate } from 'react-router-dom';
import Subs from '../components/Subs';
import { Root } from '@radix-ui/react-progress';


export default function Subscription(){
    const query_me = useQuery(QUERY_ME);
    const query_products = useQuery(QUERY_ALL_PRODUCTS);
const user = query_me?.me;

if (!Auth.loggedIn()) {
    return <Navigate to="/" />;
}

if (query_me.loading) {
    return <div>Loading...</div>;
}
console.log(query_products)
return (
    <div>
        <main className="bg-neutral-900 px-10 md:px-20 lg:px-40">
        <Nav />
        <Subs />
        </main>
    </div>
)
}