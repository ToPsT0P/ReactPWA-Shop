import React, {useState} from "react";
import styles from "./Cart.module.css";
import Images from "../../shared/ImportImages";
const Cart = () =>
{
    const [count, setCount] = useState(0)
    const [buttonDisabled, setButtonDisabled] = useState(false)
    return(
        <div className={styles.container}>
            <div className={styles.container__Item__leftSideInfo}>
                <img src={Images.photo2} alt="" />
                <h2>500 RUB</h2>
            </div>

            <div className={styles.container__Item__rightSideInfo}>
                <h2>Jaqueline Curvie bermuda chino femme en twill avec broderie curvy</h2>
                <div className={styles.container__Item__rightSideInfo__size}>
                    <p>SIZE: M</p>
                    <p>COLOR: BLACK</p>
                </div>
                <div className={styles.container__Item__rightSideInfo__Container}>
                    <div className={styles.container__Item__rightSideInfo__Quntity}>
                        <p>QUANTITY: </p>
                        <div className={styles.container__Item__rightSideInfo__QuntityCount}>{count}</div>
                    </div>
                    <div className={styles.container__Item__rightSideInfo__SetQuantity}>
                        <button><img src={Images.plus} alt="" srcset="" onClick={() => setCount(count+1)} /></button>
                        <button><img src={Images.minus} alt="" srcset="" disabled = {buttonDisabled} onClick={count > 0 ? () => setCount(count-1) : () => setButtonDisabled(true) } /></button>
                        <button className={styles.CartButton} style={{backgroundColor: "White"}}><img src={Images.vector} alt="" /></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart;