import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import PhotoList from "../components/PhotoList"

export const query = graphql`
query {
    blogBcg: file(relativePath: {eq: "assets/portada.jpg"}) {
        childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
}
`;
export default function trabajos({ data }) {
    return (
        <Layout>
        <SEO title="Trabajos" />
            <StyledHero img={data.blogBcg.childImageSharp.fluid} />
            <PhotoList />
        </Layout>
    )
}
