import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import ReactLearn from "./pages/React_Learn";
import Countries from "./pages/Countries";
import './App.css';

const client = new ApolloClient({
  // uri: "https://48p1r2roz4.sse.codesandbox.io"
  uri: "https://ci-graphql.dev/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={ client }>
        <div className="App">
          <ReactLearn />

          <div className="App-header">
            <p>Country Infos: </p>
            <Countries />
          </div>

        </div>
      </ApolloProvider>
    );
  }
}

export default App;
