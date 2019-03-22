import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import { Panel, PanelGroup } from 'react-bootstrap';
import QueryPais from "./queries/Ci_Pais";
import ReactLearn from "./pages/React_Learn";
import './App.css';
const client = new ApolloClient({
  // uri: "https://48p1r2roz4.sse.codesandbox.io"
  uri: "https://ci-graphql.dev/graphql"
});

const Countries = () => (
  <Query query={QueryPais}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error.</p>;

      const { Ci_Pais } = data;

      return Ci_Pais.data.map(({ nome, sobre_o_pais }) => (
        <div className="container" key={nome}>
          <h2>{nome}</h2>
          { sobre_o_pais ? 
            <div dangerouslySetInnerHTML={{ __html: sobre_o_pais }} />
          : null}
          <hr />
        </div>
      ));
    }}
  </Query>
);

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
