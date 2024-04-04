import photo1 from "../../shared/photo1.png"
import like from "../../shared/like.svg"
import styles from "./GoodsItem.module.css"
import addToBuyImage from "../../shared/addToCart.png"


const GoodsItem = () => {

    return(

        <div className={styles.catalog_item}>
            <div className={styles.catalog_item_image}>
                <img className={styles.catalog_item_addToBuy} 
                src={addToBuyImage} alt="" />

                <img
                className={styles.catalog_item_goodsImage} 
                src={photo1} alt="" />

            </div>
            <div className={styles.catalog_itemBottom}>
                <div className={styles.catalog_itemBottom_text}>
                    Не, ну тут какой-то текст, мб полезный, мб нет, я не ебу, честное слово
                </div>
                <div className={styles.catalog_itemBottom_price}>
                    189 RUB
                    <img src={like} alt="" />
                </div>
            </div>
        </div>
    )
}


export default GoodsItem