import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:8000/',
    cache: new InMemoryCache(),
  });

 export const callQuery = async () =>{
    const res = await client.query({
        query: gql`
          query GetLocations {
            locations {
              id
              name
              description
              photo
            }
          }
        `,
      });

     return res;
 } 