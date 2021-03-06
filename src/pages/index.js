import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>Deployed with Netlify... cool stuff</p>
    <p>This is seriously good</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
