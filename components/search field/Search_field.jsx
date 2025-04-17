import styles from './Search_field.module.css'
import { CiSearch } from "react-icons/ci";

export default function Search_field() {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <CiSearch color='#fff' size={25}/>
            </div>
            <input type="text" placeholder='Where to?'/>
        </div>
    )
}
