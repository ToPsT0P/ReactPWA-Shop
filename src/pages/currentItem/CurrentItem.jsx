import Comment from "../../entities/comments/Comment"
import styles from "./CurrentItem.module.css"
import Images from "../../shared/ImportImages"

const CurrentItem = () => {

    const testSizeArray = [
        36,38,40,42,44
    ]

    return(

        <div className={styles.productPage_wrapper}>
            <div className={styles.productPage_topSide}>
                <div className={styles.productPage_topSide_image}>
                    <div className={styles.productImage_userButtons}>
                        <img 
                        className={styles.productImage_exitImage}
                        src={Images.exitImage} alt="" />
                        <img 
                        className={styles.productImage_shareImage}
                        src={Images.shareImage} alt="" />

                    </div>
                    <img
                    className={styles.productImage} 
                    src={Images.exampleImage} alt="" />

                    <img 
                    className={styles.addToCart}
                    src={Images.addToCart} alt="" />
                </div>
                <div className={styles.productPage_topSide_description}>
                    <div className={styles.productPage_topSide_description_text}>
                        <p className={styles.text}>Jaqueline Curvie bermuda chino femme en twill avec broderie curvy</p>
                    </div>
                    <div className={styles.productPage_topSide_description_price}>
                        <p className={styles.productPage_topSide_description_price_priceText}>500 RUB</p>
                        <p className={styles.productPage_topSide_description_price_name}>SHOES</p>
                        <div className={styles.productPage_topSide_description_price_circles}>
                            <div 
                            style={{backgroundColor: "yellow"}}
                            className={styles.productPage_topSide_description_price_cirlce}></div>
                            
                            <div 
                            style={{backgroundColor: "red"}}
                            className={styles.productPage_topSide_description_price_cirlce}></div>
                            
                            <div 
                            style={{backgroundColor: "blue"}}
                            className={styles.productPage_topSide_description_price_cirlce}></div>

                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.productPage_centralSide}>
                <div className={styles.productPage_centralSide_size}>
                    <h2>SELECT SIZE</h2>
                    <div className={styles.productPage_centralSide_size_buttons}>
                        {testSizeArray.map((item, i) => {
                            return <button className={styles.productPage_centralSide_size_button}>{item}</button>
                            })}
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