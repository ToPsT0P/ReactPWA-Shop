import Comment from "../../entities/comments/Comment"
import styles from "./CurrentItem.module.css"
import exitImage from "../../shared/exit.svg"
import exampleImage from "../../shared/example.png"
import shareImage from "../../shared/share.svg"
import addToCart from "../../shared/addToCart.svg"

const CurrentItem = () => {

    return(

        <div className={styles.productPage_wrapper}>
            <div className={styles.productPage_topSide}>
                <div className={styles.productPage_topSide_image}>
                    <div className={styles.productImage_userButtons}>
                        <img 
                        className={styles.productImage_exitImage}
                        src={exitImage} alt="" />
                        <img 
                        className={styles.productImage_shareImage}
                        src={shareImage} alt="" />

                    </div>
                    <img
                    className={styles.productImage} 
                    src={exampleImage} alt="" />

                    <img 
                    className={styles.addToCart}
                    src={addToCart} alt="" />
                </div>
                <div className={styles.productPage_topSide_description}>
                    <div className={styles.productPage_topSide_description_text}>
                        <p className={styles.text}>Jaqueline Curvie bermuda chino femme en twill avec broderie curvy</p>
                    </div>
                    <div className={styles.productPage_topSide_description_price}>
                        <p className={styles.productPage_topSide_description_price_priceText}>500 RUB</p>
                        <p className={styles.productPage_topSide_description_price_name}>SHOES</p>
                    </div>
                </div>
            </div>

            <div className={styles.productPage_centralSide}>
                <div className={styles.productPage_centralSide_size}>
                    <h2>SELECT SIZE</h2>
                    <div className={styles.productPage_centralSide_size_buttons}>

                    </div>
                </div>
            </div>

            <div className={styles.productPage_bottomSide}>
                <div className={styles.productPage_bottomSide_comments}>
                    <Comment/>
                </div>
            </div>
        </div>
    )
}

export default CurrentItem