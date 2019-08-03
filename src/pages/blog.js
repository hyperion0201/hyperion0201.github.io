import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import avatar from "../components/avatar.jpg"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SocialLink = styled.div`
  padding-right: 10px;
`
const AuthorContainer = styled.div`
  position: fixed;
  margin: 0 auto;
  width: 250px;
  padding-top: 3.5rem;
  
  @media (max-width: 1250px) {
    display: none;
  }
`
const Avatar = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  display: block;
  margin: 0 auto;
`
const BlogContainer = styled.div`
  display: flex;
`
const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.5rem 3.5rem;
`

const ArticleDate = styled.h5`
  display: inline;
  color: #606060;
  margin-bottom: 10px;
`

const MarkerHeader = styled.h3`
  display: inline;
  color: #c0d1c4;
  border-radius: 1em 0 1em 0;
  margin-bottom: 10px;
  background-image: linear-gradient(
    -100deg,
    rgba(255, 250, 150, 0.15),
    rgba(15, 15, 15, 0.8) 100%,
    rgba(255, 250, 150, 0.25)
  );
`

const ReadingTime = styled.h5`
  display: inline;
  color: #606060;
  margin-bottom: 10px;
`

 export const Author = ({ social }) => {
  return (
    <AuthorContainer className="author-container">
      <div style={{ textAlign: `center`, width: `auto`, marginTop: `30px` }}>
        <Avatar src={avatar} alt="avatar" />
        <br></br>
        <h3 style={{ marginBottom: `10px` }}>Hieu Hoang</h3>

        <a href={social.facebook} target="_blank" rel="noopener noreferrer">
          <SocialLink className="fab fa-facebook-square" aria-hidden="true" />
        </a>
        <a href={social.instagram} target="_blank" rel="noopener noreferrer">
          <SocialLink className="fab fa-instagram" />
        </a>
        <a href={social.github} target="_blank" rel="noopener noreferrer">
          <SocialLink className="fab fa-github" />
        </a>
        <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
          <SocialLink className="fab fa-linkedin" />
        </a>
   
        <p style={{marginTop: `20px`}}>Software Enginner, Product</p>
      </div>
    </AuthorContainer>
  )
}
const IndexPage = ({ data }) => {
  const social = data.site.siteMetadata.social

  return (
    <Layout>
      <SEO title="Blog" />
      <BlogContainer className="blog-container">
        <Author social={social} />
        <Content>
          <h1>Writings & Ramblings</h1>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link
                to={node.frontmatter.path}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                <MarkerHeader>{node.frontmatter.title} </MarkerHeader>
                <div>
                  <ArticleDate>{node.frontmatter.date}</ArticleDate>
                  <ReadingTime> - {node.fields.readingTime.text}</ReadingTime>
                </div>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))}
        </Content>
      </BlogContainer>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          facebook
          twitter
          github
          instagram
          linkedin
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`
