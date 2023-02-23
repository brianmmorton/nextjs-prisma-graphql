import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import theme from '../lib/theme';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

// Determines if we are running on server or in client.
const isServerSideRendered = () => {
  return typeof window === 'undefined';
};

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql'
});

const wsLink = () => {
  return new GraphQLWsLink(createClient({
    url: 'ws://localhost:3000/graphql'
  }));
}

export const client = new ApolloClient({
  link: isServerSideRendered() ? httpLink : wsLink(),
  cache: new InMemoryCache(),
});

/**
 * Accessibility tool - outputs to devtools console on dev only and client-side only.
 * @see https://github.com/dequelabs/axe-core-npm
 */
if (process.env.NODE_ENV !== 'production' && !isServerSideRendered()) {
  import('react-dom').then((ReactDOM) => {
    import('@axe-core/react').then((axe) => {
      axe.default(React, ReactDOM, 1000, {});
    });
  });
}

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <UserProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ApolloProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </UserProvider>
  );
};

export default App;
