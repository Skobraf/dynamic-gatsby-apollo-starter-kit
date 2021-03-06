import React from 'react'
import { graphql, Link } from 'gatsby'

import '../styles/style.css'

export default function Home({ data }) {
  return (
    <div className="home-container">
      <h1>This page is static, it's generated during build time</h1>
      <h2>{data.site.siteMetadata.title}</h2>
      <h3>{data.site.siteMetadata.description}</h3>
      <p>
        This Starter-kit uses
        <a href="https://github.com/lennertVanSever/graphcountries">
          Countries v2
        </a>
        public graphQl API, which enable us to fetch country data depending on
        the country name in our case.
      </p>
      <br />
      <p>
        Navigate to /countries/[:nameOfTheCountry] by changing the value of
        [:nameOfTheCountry] in the url
      </p>
      <Link to="/countries/Morocco">Click Here for example</Link>
    </div>
  )
}
export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
