import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

export default ({ data, pathContext }) => {
  const { markdownRemark: post } = data
  const { prev, next } = pathContext

  return (
    <div>
      <Helmet>
        <title>{`${post.frontmatter.title} - Callum M-R`} </title>
      </Helmet>
      <p>
        <Link to="/posts">All posts</Link>
      </p>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <div>
        {prev && (
          <Link to={prev.frontmatter.path}>&lt; {prev.frontmatter.title}</Link>
        )}
      </div>
      <div>
        {next && (
          <Link to={next.frontmatter.path}>{next.frontmatter.title} &gt;</Link>
        )}
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
      }
    }
  }
`
