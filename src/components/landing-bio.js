import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import avatar from './avatar.jpg';
const Container = styled.div`
  text-align: center;
`
const SocialLink = styled.div`
  padding-right: 10px;
`
const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

export const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
`

export const NameHeader = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0;
`
export const Avatar = styled.img`
  border-radius: 50%;
  box-shadow: 0px 0px 10px 0px rgba(39,49,65,0.1);

  &:hover {
    box-shadow: rgba(39, 44, 49, 0.07) 8px 28px 50px, rgba(39, 44, 49, 0.04) 1px 6px 12px;
    transition: all 0.4s ease;
    transform: translate3D(0, -1px, 0) scale(1.02);
  }
  `

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <Avatar src={avatar} width="150" height="150"/>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>Software Engineer, Product</Description>
          <a href={`https://facebook.com/hyperion0201`} target="_blank" rel="noopener noreferrer">
          <SocialLink className="fab fa-facebook-square" aria-hidden="true" />
        </a>
        <a href={`https://instagram.com/hyperion0201`} target="_blank" rel="noopener noreferrer">
          <SocialLink className="fab fa-instagram" />
        </a>
        <a href={`https://github.com/hyperion0201`} target="_blank" rel="noopener noreferrer">
          <SocialLink className="fab fa-github" />
        </a>
        <a href={`https://linkedin.com/in/hyperion0201`} target="_blank" rel="noopener noreferrer">
          <SocialLink className="fab fa-linkedin" />
        </a>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
}

export default LandingBio
