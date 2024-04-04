import Cart from "../../entities/Cart/Cart"
import styles from "./MyCart.module.css"
import React from "react"

const MyCart = () =>
{
    return(
        <div>
            <h1>MY CART</h1>
            <Cart/>
        </div>
    )
}

export default MyCart