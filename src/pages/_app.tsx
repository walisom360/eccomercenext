import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { globalStyles } from "src/styles/global";
import { apolloClient } from "../lib/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />

      {globalStyles()}
    </ApolloProvider>
  );
}

export default MyApp;
