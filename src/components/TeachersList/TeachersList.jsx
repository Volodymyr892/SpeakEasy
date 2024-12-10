import Teacher from "../Teacher/Teacher";

export default function TeachersList() {
    return(
       <div>
            <ul>
                <li>
                    <Teacher/>
                </li>
            </ul>
            <button type="submit">Load more</button>
       </div>
    )
}