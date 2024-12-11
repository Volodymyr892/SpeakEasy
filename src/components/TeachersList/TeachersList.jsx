import Teacher from "../Teacher/Teacher";
import css from "./TeachersList.module.css"

export default function TeachersList() {
    return(
       <div className={css.container}>
            <ul >
                <li>
                    <Teacher/>
                </li>
                <li>
                    <Teacher/>
                </li>
            </ul>
            <button className={css.button} type="submit">Load more</button>
       </div>
    )
}