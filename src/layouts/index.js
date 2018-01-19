import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Header from '../components/Header'
import Github from '../assets/Github'
import Twitter from '../assets/Twitter'
import Blog from '../assets/Blog'
import './index.css'
import 'prismjs/themes/prism-solarizedlight.css'

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem 1.0875rem 1.45rem;
`

const icons = [
  {
    render: Blog,
    link: '/posts',
    internal: true,
  },
  {
    render: Twitter,
    link: 'https://twitter.com/callummr',
  },
  {
    render: Github,
    link: 'https://github.com/callummr',
  },
]

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Callum M-R | Front Endgineer</title>
      <meta name="description" content="" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
    </Helmet>
    <Header title="Callum M-R" icons={icons} />
    <ContentContainer>{children()}</ContentContainer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
