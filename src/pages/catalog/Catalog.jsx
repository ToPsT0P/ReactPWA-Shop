import styles from "./Catalog.module.css"
import searchImage from "../../shared/searchImage.svg"
import Images from "../../shared/ImportImages"
import { useState } from "react"
import GoodsItem from "../../entities/goodsItem/GoodsItem"

const Catalog = () => {

    const [testArray] = useState([
        { 
            obj:1
        },
        {
            obj:2
        },
        {
            obj:3
        },
        {
            obj:4
        },
        {
            obj:6
        },
        {
            obj:5
        },

    ])

    return(

        // Верхняя часть интерфейса
        <div className={styles.catalog_wrapper}>
            <div className={styles.catalog_topSide}>
                <div className={styles.catalog_inputDiv}>
                    <div className={styles.catalog_input}>
                        <img src={Images.searchImage} alt="" />
                        <input 
                        type="text" 
                        placeholder="Введите название товара или бренда"/>
                    </div>
                    <div className={styles.catalog_inputDiv_options}>
                        Доп. Опции
                    </div>
                </div>
                <div className={styles.catalog_choice}>
                    <button>ALL</button>
                    <button>TROUSERS</button>
                    <button>SHORTS</button>
                    <button>SHOES</button>
                    <button>SKIRTS</button>
                    <button>DRESS</button>
                </div>
            </div>

            {/* Вывод товаров */}
            <div className={styles.catalog_centerSide}>
                <div className={styles.catalog_items}>
                    {testArray.map(() => {return <GoodsItem/>})}           
                </div>
            </div>

        
        </div>
    )
}

export default Catalog