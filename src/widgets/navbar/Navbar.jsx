    import { Link } from "react-router-dom"
import Images from "../../shared/ImportImages"
import styles from "./Navbar.module.css"

const Navbar = () => {

    return(
        <div className={styles.navbar}>
            <Link to={"/notification"}><img alt='' src={Images.pushes} /></Link>
          <img alt='' src={Images.user} />
          <Link to={"/"} ><img alt='' src={Images.home} /></Link>
          <Link to={"/cart"}><img alt='' src={Images.cart} /></Link>
          <img alt='' src={Images.like} />
        </div>
    )
}

export default Navbar