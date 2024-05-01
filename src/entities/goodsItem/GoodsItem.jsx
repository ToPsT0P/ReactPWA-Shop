import styles from "./GoodsItem.module.css"
import Images from "../../shared/ImportImages"
import { Link } from "react-router-dom"

const GoodsItem = () => {

    return(

        <Link to={"/item"} className={styles.catalog_item}>
            <div className={styles.catalog_item_image}>
                <img className={styles.catalog_item_addToBuy} 
                src={Images.addToCart} alt="" />

                <img
                className={styles.catalog_item_goodsImage} 
                src={Images.photo1}  alt="" />

            </div>
            <div className={styles.catalog_itemBottom}>
                <div className={styles.catalog_itemBottom_text}>
                    Some product name
                </div>
                <div className={styles.catalog_itemBottom_price}>
                    189 RUB
                    <img src={Images.like} alt="" />
                </div>
            </div>
        </Link>
    )
}


export default GoodsItem