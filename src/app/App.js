import React from 'react';
import Catalog from '../pages/catalog/Catalog';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import styles from "./app.module.css"
import userIcon from "../shared/user.png"
import homeIcon from "../shared/home.png"
import heartIcon from "../shared/heart.png"
import pushIcon from "../shared/push.png"
import cartIcon from "../shared/cart.png"
import MyCart from '../pages/MyCart/MyCart';
import CurrentItem from '../pages/currentItem/CurrentItem';
import { Link } from "react-router-dom"
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
    </div>
  )
}

export default App