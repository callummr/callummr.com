import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Code from '../components/Code'

const aboutMe = `
const me = {
  name: 'Callum Mellor-Reed', 
  type: engineers.javascript, 
  skills: [
    'react',
    'redux',
    'javascript'
  ],
  dependencies: [ '☕️', '🎮', '🍕' ],
  contact: {
    email: 'me@callummr.com',
    twitter: '@callummr'
  }
};
`

const IndexPage = () => (
  <div>
    <Helmet>
      <title>Callum M-R</title>
    </Helmet>
    <Code>{aboutMe}</Code>
  </div>
)

export default IndexPage
