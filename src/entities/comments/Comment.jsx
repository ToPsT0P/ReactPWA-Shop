import styles from "./Comment.module.css"
import Images from "../../shared/ImportImages"
import { CiStar } from "react-icons/ci";

const Comment = ({rating, description, userPhoto}) => {
    

    return(
    
    <div className={styles.comment_wrapper}>
        <div className={styles.comment_wrapper_leftSide}>
            <img src={Images.userIcon} alt="" />
        </div>

        <div className={styles.comment_wrapper_rightSide}>
            <div className={styles.comment_wrapper_rightSide_rating}>
                <CiStar/>
                <CiStar/>
                <CiStar/>
                <CiStar/>
                <CiStar/>
            </div>

            <div className={styles.comment_wrapper_rightSide_text}>
                <p>Lorem ipsum dolor sit amet consectetur. Et quam dis morbi tellus quis non. Sit in praesent tristique sodales lectus vitae posuere pellentesque.</p>
            </div>
        </div>
    </div>
    
    )
}

export default Comment