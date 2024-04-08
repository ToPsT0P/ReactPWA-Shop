import { Link } from "react-router-dom"
import Cart from "../../entities/Cart/Cart"
import styles from "./MyCart.module.css"
import React, {useState} from "react"

const MyCart = () =>
{
    //просто массив для верстки
    const [Carts] = useState([
        { 
            obj:1
        },
        {
            obj:2
        },
        {
            obj:3
        }
    ])
    return(
        <div className={styles.container}>
            <h1>MY CART</h1>
            <div className={styles.cartsItems}>
                {Carts.map(() => {return <Cart />} )}
            </div>

            <div className={styles.carts__totalPrice}>
                <p>TOTAL</p>
                <span>1500 RUB</span>
            </div>

            <div className={styles.carts__checkout}>
            <Link to={"/order"}><button>Proceed to checkout</button></Link>
            </div>
        </div>
    )
}

export default MyCart