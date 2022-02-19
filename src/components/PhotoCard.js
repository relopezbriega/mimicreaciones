import React from 'react'
import Image from "gatsby-image"
import * as styles from "../css/place.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ShareButtons from "../components/Share"
import config from "../../gatsby-config"

const PhotoCard = ({ photo }) => {
    //const { images } = photo;
    let mainImage = photo.childImageSharp.fluid;
    let imgUrl = config.siteMetadata.siteUrl+mainImage.src

    return (
        <article className={styles.place}>
            <div className={styles.imgContainer}>
                <Image fluid={mainImage} className={styles.img} alt="trabajo" />
                {/* <AniLink fade className={styles.link} to={`/trabajos/${slug}`}>open</AniLink> */}
                <AniLink fade className={styles.link} to={imgUrl}>Abrir</AniLink>
            </div>
            <div>
          <ShareButtons title="Mimi Creaciones" url={imgUrl} />
            </div>
        </article>
    )
}

export default PhotoCard