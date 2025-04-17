import styles from './Search_filters.module.css'
import { IoFilterSharp } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";

export default function Search_filters() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.card_item}>
                    <div className={styles.icon}>
                        <IoFilterSharp color='#fff' size={25} />
                    </div>
                    <div className={styles.card_text}>
                        <div className={styles.text1}>Add Date</div>
                        <div className={styles.text2}>Jan 1 - Jan 2</div>
                    </div>
                </div>
                <div className={styles.card_btn}>
                    <IoCalendarOutline color='#fff' size={25}/>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.card_item}>
                    <div className={styles.icon}>
                        <IoFilterSharp color='#fff' size={25} />
                    </div>
                    <div className={styles.card_text}>
                        <div className={styles.text1}>Add Date</div>
                        <div className={styles.text2}>Jan 1 - Jan 2</div>
                    </div>
                </div>
                <div className={styles.card_btn}>
                    <IoPeopleSharp color='#fff' size={25}/>
                </div>
            </div>
        </div>
    )
}
