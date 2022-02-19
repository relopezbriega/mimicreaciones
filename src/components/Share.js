import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    PinterestIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
  } from 'react-share'
import * as styles from "../css/share.module.css"

  const ShareButtons = ({title, url}) => {

    return(
        <div>
          <FacebookShareButton className={styles.ShareButton} url={url} >
                <FacebookIcon  size={40} round={true}/>
         </FacebookShareButton>

          <TwitterShareButton url={url} title={title} className={styles.ShareButton}>
                <TwitterIcon  size={40} round={true} />
          </TwitterShareButton>

          <PinterestShareButton media={url} url={url} className={styles.ShareButton}>
            <PinterestIcon  size={40} round={true}/>
          </PinterestShareButton>


          <WhatsappShareButton url={url} title={title} className={styles.ShareButton}>
               <WhatsappIcon  size={40} round={true}/>
           </WhatsappShareButton>
        </div>
      )

}
export default ShareButtons