import React, { useState } from 'react';
import Catalog from '../pages/catalog/Catalog';
import styles from "./app.module.css"
import CurrentItem from '../pages/currentItem/CurrentItem';
import { Link, Route, Routes } from 'react-router-dom';
import MyCart from '../pages/MyCart/MyCart';
import Navbar from '../widgets/navbar/Navbar';
import FilterModal from '../widgets/filterModal/FilterModal';
import UserOrder from '../pages/userOrder/UserOrder';
import NotificationPage from "../pages/notificationPage/NotificationPage";

function App() {

  const [filterModalActive, setFilterModalActive] = useState(false)

  return (

    <div className={styles.absoluteWrapper}>
      {filterModalActive && <FilterModal setFilterModalActive={setFilterModalActive} />}
      <Routes>
        <Route path="/" element={<Catalog setFilterModalActive={setFilterModalActive}/>} />
        <Route path="/item" element={<CurrentItem/>}/>
        <Route path='/cart' element={<MyCart/>}/>
        <Route path="/order" element={<UserOrder/>} />
        <Route path="/notification" element={<NotificationPage/>} />
      </Routes>
        <Navbar/>
    </div>
  )
}

export default App