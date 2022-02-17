import React from "react"
import Title from "./Title"
import * as styles from "../css/about.module.css"
import { Link } from "gatsby"
//import img from "../images/mimi.jpg"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import socialIcons from "../constants/social-icons"

const getAbout = graphql`
query aboutImage{
  aboutImage: file(relativePath: {eq: "assets/mimi.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`;


const About = () => {
    const { aboutImage } = useStaticQuery(getAbout);
    return (
        <section className={styles.about}>
            <Title title="sobre" subtitle="Mimi" />
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                        <Img fluid={aboutImage.childImageSharp.fluid} alt="Mimi Creaciones" />
                    </div>
                </article>
                <article className={styles.aboutInfo}>
                    <h4>Mimi Creaciones</h4>
                        <p>Hola! soy Mimi, mamá de Belén, Rosalía y Ezequiel y mi perrita Lisa. 
                            En mis tiempos libres me gusta dedicarme a las manualidades y los tejidos.
                            También doy clases de tejidos por la zona de Ituzaingó, provincia de Buenos Aires.
                        </p>
                        <div className={styles.icons}>
                        {socialIcons.map((item, index) => {
                            return (
                    <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">{item.icon}</a>
                            )
                        })}
                        </div>
                        <Link to="/trabajos" className="btn-primary" >
                        ver mis tejidos
                        </Link>
                </article>
            </div>
        </section>
    )
}
export default About