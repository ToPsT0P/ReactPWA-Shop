import React from 'react';
import Catalog from '../pages/catalog/Catalog';
import styles from "./app.module.css"
import userIcon from "../shared/user.png"
import homeIcon from "../shared/home.png"
import heartIcon from "../shared/heart.png"
import pushIcon from "../shared/push.png"
import cartIcon from "../shared/cart.png"
import MyCart from '../pages/MyCart/MyCart';
import CurrentItem from '../pages/currentItem/CurrentItem';

function App() {
  return (

    <div className={styles.absoluteWrapper}>
        <Catalog/>
        <div className={styles.navbar}>
          <img alt='' src={pushIcon} />
          <img alt='' src={userIcon} />
          <img alt='' src={homeIcon} />
          <img alt='' src={cartIcon} />
          <img alt='' src={heartIcon} />
        
      </div>
    </div>
  )
}

export default App