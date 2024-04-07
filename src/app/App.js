import React from 'react';
import Catalog from '../pages/catalog/Catalog';
import styles from "./app.module.css"
import userIcon from "../shared/user.png"
import homeIcon from "../shared/home.png"
import heartIcon from "../shared/heart.png"
import pushIcon from "../shared/push.png"
import cartIcon from "../shared/cart.png"
<<<<<<< HEAD
import Cart from '../entities/Cart/Cart';
=======
import MyCart from '../pages/MyCart/MyCart';
import CurrentItem from '../pages/currentItem/CurrentItem';
import { Link, Route, Routes } from 'react-router-dom';
>>>>>>> 1b742343f48b71c2d5cbbcb91670ca1719e96096

function App() {
  return (

    <div className={styles.absoluteWrapper}>
      <Routes>
        <Route path="/" element={<Catalog/>} />
        <Route path="/item" element={<CurrentItem/>}/>
        <Route path='/cart' element={<MyCart/>}/>
      </Routes>
        <div className={styles.navbar}>
          <img alt='' src={pushIcon} />
          <img alt='' src={userIcon} />
          <Link to={"/"} ><img alt='' src={homeIcon} /></Link>
          <Link to={"/cart"}><img alt='' src={cartIcon} /></Link>
          <img alt='' src={heartIcon} />
        </div>
        <Cart />
    </div>
  )
}

export default App