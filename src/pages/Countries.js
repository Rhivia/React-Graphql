import React, { Component } from 'react';
import QueryPais from "../queries/Ci_Pais";
import { Query } from "react-apollo";

class Countries extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      activeKey: "1"
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  render () {
    return (
      <Query query={QueryPais}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error.</p>;
  
          const { Ci_Pais } = data;
  
          return Ci_Pais.data.map(({ nome, sobre_o_pais }) => (
            <div className="container" key={nome}>
              
                <h2>{nome}</h2>
              
              { sobre_o_pais ? <div dangerouslySetInnerHTML={{ __html: sobre_o_pais }} /> : null}
              <hr />
            </div>
          ));
        }}
      </Query>
    )
  }
}

export default Countries;