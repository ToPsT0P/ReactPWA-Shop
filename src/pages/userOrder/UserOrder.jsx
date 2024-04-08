import styles from "./UserOrder.module.css"

const UserOrder = () => {

    return(

        <div className={styles.orderPage_wrapper}>
            <div className={styles.orderPage_topSide}>
                <h1>МОЙ ЗАКАЗ</h1>
            </div>

            <div className={styles.orderPage_centralSide}>
                <div className={styles.orderPage_mapBox}>
                    <h2>Выберите локацию</h2>
                    <div className={styles.orderPage_map}>

                    </div>                    
                </div>

                <div className={styles.orderPage_cardData}>
                    <h2>Введите данные</h2>
                    <button>Сохранить карту</button>
                </div>
            </div>

            <div className={styles.orderPage_bottomSide}>

            </div>
        </div>

    )
}

export default UserOrder