import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

export default ({ data: { allMarkdownRemark: { edges: posts } } }) => (
  <div>
    <Helmet>
      <title>Posts - Callum M-R</title>
    </Helmet>
    <h1>Posts</h1>
    {posts
      .filter(post => post.node.frontmatter.title.length)
      .map(({ node: post }) => (
        <div key={post.id}>
          <h2>
            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>{' '}
          </h2>
          <p>
            {post.frontmatter.date} | {post.excerpt}
          </p>
        </div>
      ))}
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
        }
      }
    }
  }
`
