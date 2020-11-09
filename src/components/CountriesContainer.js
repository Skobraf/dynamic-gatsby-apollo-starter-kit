import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { useParams } from '@reach/router'

const COUNTRY_DETAILS_QUERY = gql`
  query countryDetailsQuery($name: String) {
    Country(name: $name) {
      name
      capital
    }
  }
`
export default function CountriesContainer() {
  const { name: countryName } = useParams()

  const { loading, error, data } = useQuery(COUNTRY_DETAILS_QUERY, {
    variables: { name: countryName },
  })
  if (loading) return <p>....loading</p>
  if (error) return <p>error: {error}</p>
  return data?.Country.length > 0 ? (
    <div>
      <h1>The capital of: {data?.Country[0].name}</h1>
      <h2>Is: {data?.Country[0].capital}</h2>
    </div>
  ) : (
    <p>This country doese not exist, please verify the name</p>
  )
}
