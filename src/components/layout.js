
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Header from "./header"
import "./layout.css"
import Particles from './particles-wrapper'
const Content = styled.div`
  margin: 0 auto;
  
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`

const GatsbyLink = styled.a`
  margin-left: 5px;
  text-decoration: none;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
       <Particles/>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
          <main>{children}</main>
          <Footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <GatsbyLink href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby.</GatsbyLink>
          </Footer>
        </Content>
       
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
