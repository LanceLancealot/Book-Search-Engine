import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Update with your GraphQL server endpoint
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </ApolloProvider>
  );
}

export default App;
