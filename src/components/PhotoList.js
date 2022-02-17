import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Title from "./Title"
import * as styles from "../css/items.module.css"
import PhotoCard from './PhotoCard'

/* const getPhotos = graphql`
query {
	photos: allImageSharp(limit: 30) {
        edges {
          node {
            id
            fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_tracedSVG
                                }
                }
        }
    }
}
`; */

const getPhotos = graphql`
query {
	photos: allFile(filter:{extension:{regex:"/(jpeg|jpg|gif|png)/"},  relativeDirectory: {ne: "assets"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
}
`;

const PhotoList = () => {
    const { photos } = useStaticQuery(getPhotos);
    console.log(photos)
    
    return (
        <section className={styles.tours}>
            <Title title="mimi" subtitle="Creaciones" />
            <p className={styles.subText}><span>Fotos de</span> mis trabajos</p>
            <div className={styles.center}>
                 {photos.edges.map(({node}) => {
                    return <PhotoCard key={node.id} photo={node} />
                    console.log(node)
                })}
            </div>
        </section>
    )
}
export default PhotoList;
