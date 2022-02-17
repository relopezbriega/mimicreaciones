import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import SEO from "../components/SEO"

const Photos = ({ data }) => {
    //const { name, description, images } = data.photo;
    let mainImage = photo.childImageSharp.fluid;

    return (
        <Layout>
            <SEO title="Fotos" />
            <section className={styles.blog}>
                <h1 className={styles.center}>{name}</h1>
                <div className={styles.center}>
                    <Img fluid={mainImage} alt="single image" />
                    <h4>{description}</h4>
                    <AniLink fade to="/trabajos" className="btn-primary">Todos los trabajos</AniLink>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
query {
    defaultBcg: file(relativePath: {eq: "portada.jpg"}) {
        childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
}
`;

export default Photos
