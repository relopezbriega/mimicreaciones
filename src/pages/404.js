import React from "react"
import Layout from "../components/Layout"
import * as styles from "../css/error.module.css"
//import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Banner from "../components/Banner"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export const query = graphql`
query {
    defaultBcg: file(relativePath: {eq: "assets/portada.jpg"}) {
        childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
}
`;

export default function error ({data}) {
    return (
        <Layout>
        <SEO title="Home" />
        <header className={styles.error}>
        <StyledHero img={data.defaultBcg.childImageSharp.fluid}></StyledHero>
        <Banner title="oops algo salió mal">
            <AniLink paintDrip hex="#AEECEE" to="/" className="btn-white">
                volver a la pagina principal
            </AniLink>
        </Banner>
        </header>
    </Layout>
    )
}

