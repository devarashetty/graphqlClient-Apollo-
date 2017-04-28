import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';

// Polyfill fetch
import 'isomorphic-fetch';

import routes from './routes';
import createApolloClient from './helpers/create-apollo-client';
import getNetworkInterface from './transport';

const subscriptionsURL = process.env.NODE_ENV !== 'production'
  ? 'ws://localhost:3010/subscriptions'
  : 'ws://api.githunt.com/subscriptions';

const wsClient = new SubscriptionClient(subscriptionsURL, {
  reconnect: true,
});

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  getNetworkInterface(),
  wsClient,
);



const client = createApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
  initialState: window.__APOLLO_STATE__, // eslint-disable-line no-underscore-dangle
  ssrForceFetchDelay: 100,
  connectToDevTools: true,
});

render((
  <ApolloProvider client={client}>
    <Router history={browserHistory} >
      {routes}
    </Router>
  </ApolloProvider>
), document.getElementById('content'));
