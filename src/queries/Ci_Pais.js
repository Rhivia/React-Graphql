import gql from "graphql-tag";

const query = gql`{
    Ci_Pais {
      data {
        id
        nome
        nome_en
        sigla
        capital
        sobre_o_pais
        idioma {
          id
        }
        moeda {
          id
        }
      }
    }
  }`;

export default query;