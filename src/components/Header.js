import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Outer = styled.div`
  background: #ff5e99;
  text-transform: uppercase;
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
`

const Title = styled.h1`
  margin: 0;
`

const Icons = styled.ul`
  list-style: none;
  margin: 0;
`

const IconItem = styled.li`
  display: inline-block;
  margin: 0 0 0 10px;
  width: 44px;
  height: 44px;
  color: white;

  svg {
    fill: #fff;
  }
`

const PlainLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:visited {
    color: white;
  }
`

const PlainA = styled.a`
  color: white;
  text-decoration: none;
`

export default ({ title, icons = [] }) => (
  <Outer>
    <Inner>
      <Title>
        <PlainLink to="/">{title}</PlainLink>
      </Title>
      <Icons>
        {icons.map(({ render, link, internal = false }) => (
          <IconItem>
            {internal ? (
              <Link to={link}>{render()}</Link>
            ) : (
              <PlainA href={link} target="_blank">
                {render()}
              </PlainA>
            )}
          </IconItem>
        ))}
      </Icons>
    </Inner>
  </Outer>
)
