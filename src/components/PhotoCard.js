import React from 'react'
import Image from "gatsby-image"
import * as styles from "../css/place.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const PhotoCard = ({ photo }) => {
    //const { images } = photo;
    let mainImage = photo.childImageSharp.fluid;

    return (
        <article className={styles.place}>
            <div className={styles.imgContainer}>
                <Image fluid={mainImage} className={styles.img} alt="trabajo" />
                {/* <AniLink fade className={styles.link} to={`/trabajos/${slug}`}>open</AniLink> */}
                <AniLink fade className={styles.link} to={`/`}>Home</AniLink>
            </div>
            <div className={styles.footer}>
            </div>
        </article>
    )
}
//console.log(photo)
export default PhotoCard