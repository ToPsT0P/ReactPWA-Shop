import React from "react";
import styles from "./Cart.module.css";
import photo2 from "../../shared/photo2.png"
const Cart = () =>
{
    return(
        <div className={styles.container}>

            <div className={styles.container__Item__leftSideInfo}>
                <img src={photo2} alt="" />
                <h2>500 RUB</h2>
            </div>

            <div className={styles.container__Item__rightSideInfo}>
                <h2>Jaqueline Curvie bermuda chino femme en twill avec broderie curvy</h2>
                <div className={styles.container__Item__rightSideInfo__size}>

                </div>
            </div>

        </div>
    )
}

export default Cart;