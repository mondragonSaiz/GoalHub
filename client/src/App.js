import React from 'react';
import Home from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import MemberDashboard from './pages/MemberDashboard';
// import ForgotPassword from './components/ForgotPassword';
import Susbscriptions from './pages/Subscriptions';
import SignUp from './pages/signUp';
import LogIn from './pages/logIn';
import '../src/styles/globals.css';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import SignUpForm from './pages/SignUpForm';
// import NewTask from './components/NewTask';
import ProfileSettings from './pages/ProfileSettings';

const httpLink = createHttpLink({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/member-dashboard" element={<MemberDashboard />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/sign-up-form" element={<SignUpForm />} />
          {/* <Route path="/new-task" element={<NewTask />} /> */}
          {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}

          <Route path="/settings" element={<ProfileSettings />} />
          <Route path="/subscriptions" element={<Susbscriptions />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
