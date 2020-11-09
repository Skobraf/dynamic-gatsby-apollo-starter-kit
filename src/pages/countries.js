import React from 'react'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from '@apollo/client'
import { Router } from '@reach/router'
import CountriesContainer from '../components/CountriesContainer'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://countries-274616.ew.r.appspot.com/',
  }),
  cache: new InMemoryCache(),
})
function Countries() {
  return (
    <ApolloProvider client={client}>
      <p>hello zorld</p>
      <Router>
        <CountriesContainer path="/countries/:name" />
      </Router>
    </ApolloProvider>
  )
}
export default Countries
