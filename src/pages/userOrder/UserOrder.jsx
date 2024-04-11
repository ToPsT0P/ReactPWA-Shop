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
                    <h2>Данные карты</h2>
                </div>
                <div className={styles.orderPage_cardData_card}>
                    <div style={{width:"100%"}}>
                        <label htmlFor="">Номер карты</label>
                        <input id="cardNumber" type="text" placeholder="**** **** **** ****" />

                    </div>
                    <div style={{width:"48%"}}>
                        <label>Дата окончания</label>
                        <input id="cardExpiration" type="text" placeholder="MM/YY" />

                    </div>
                    <div style={{width:"48%"}}>
                        <label>Код безопасности</label>
                        <input id="cardCVV" type="text"  placeholder="CVV"/>

                    </div>
                    <div style={{width:"100%"}}>
                        <label>Владелец</label>
                        <input id="cardholderName" type="text" placeholder="ФИО" />

                    </div>
                </div>
            </div>

            <div className={styles.orderPage_bottomSide}>

            </div>
        </div>

    )
}

export default UserOrder