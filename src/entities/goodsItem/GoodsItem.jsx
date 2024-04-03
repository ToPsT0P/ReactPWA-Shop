import photo1 from "../../shared/photo1.png"
import like from "../../shared/like.svg"
import styles from "./GoodsItem.module.css"


const GoodsItem = () => {

    return(

        <div className={styles.catalog_item}>
            <img src={photo1} alt="" />
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