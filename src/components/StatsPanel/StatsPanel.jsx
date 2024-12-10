import css from "./StatsPanel.module.css"
export default function StatsPanel() {
    return(
        <div className={css.container}> 
        <ul className={css.list}>
            <li className={css.item}>
                <p className={css.number}>32,000 +</p>
                <p className={css.name}>Experienced tutor</p>
            </li>
            <li className={css.item}>
                <p className={css.number}>300,000 +</p>
                <p className={css.name}>5-star tutor reviews</p>
            </li>
            <li className={css.item}>
                <p className={css.number}>120 +</p>
                <p className={css.name}>Subjects taught</p>
            </li>
            <li className={css.item}>
                <p className={css.number}>200 +</p>
                <p className={css.name}>Tutor nationalities</p>
            </li>
        </ul>
        </div>
    )
}