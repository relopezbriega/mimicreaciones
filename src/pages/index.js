import React from "react"
import Layout from "../components/Layout"
//import SimpleHero from "../components/SimpleHero"
import StyledHero from "../components/StyledHero"
//import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Banner from "../components/Banner"
import About from "../components/About" 
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export const query = graphql`
query {
    defaultBcg: file(relativePath: {eq: "assets/portada1.jpg"}) {
        childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
}
`;

export default ({ data }) => ( 
  <Layout>
    <SEO title="Home" />
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
    {<Banner title="Mis Tejidos"
      info="Pasen a ver algunos de mis tejidos." 
    >
    <AniLink paintDrip hex="#AEECEE" to="/trabajos" className="btn-white">Mis Tejidos</AniLink>
    </Banner>}
    </StyledHero>
    <About />

  </Layout>
)

