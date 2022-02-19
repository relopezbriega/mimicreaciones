import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Title from "./Title"
import * as styles from "../css/items.module.css"
import PhotoCard from './PhotoCard'
import AniLink from "gatsby-plugin-transition-link/AniLink"

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

const maxload = 15
const PhotoList = () => {
  const { photos } = useStaticQuery(getPhotos);
  
  const alljobs = photos.edges
  
    // State for the list
  const [list, setList] = useState([...alljobs.slice(0, maxload)])

  // State to trigger oad more
  const [loadMore, setLoadMore] = useState(false)

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(alljobs.length > maxload)

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < alljobs.length
      const nextResults = isMore
        ? alljobs.slice(currentLength, currentLength + maxload)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < alljobs.length
    setHasMore(isMore)
  }, [list]) //eslint-disable-line
    
    return (
        <section className={styles.tours} name="top">
            <Title title="mimi" subtitle="Creaciones" />
            <p className={styles.subText}><span>Fotos de</span> mis trabajos</p>
            <div className={styles.center}>
                 {list.map(({node}) => {
                    return <PhotoCard key={node.id} photo={node} />
                })}
                {hasMore ? (
                  <button onClick={handleLoadMore} className="btn-primary">Ver mas</button>
                ) : (
                  <AniLink fade className="btn-primary" to={`/`}>Volver a inicio</AniLink>
                )}
            </div>
        </section>
    )
}
export default PhotoList;
