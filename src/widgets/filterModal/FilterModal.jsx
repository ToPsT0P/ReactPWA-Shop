import styles from "./FilterModal.module.css"

const FilterModal = ({setFilterModalActive}) => {

    return(
        
        <div className={styles.modal_wrapper}>
            asdasd
            <button style={{border: "1px solid black"}} onClick={() => {setFilterModalActive(false)}}>Выход</button>
        </div>
    )
}

export default FilterModal